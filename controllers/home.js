var _ = require('lodash');

module.exports = function (app, log) {
  var Pregunta = require("../models/modelo");
  var TestModel = require("../models/modelo").TestModel;
  var preguntasCount = require("../models/modelo").preguntasCount;
  var Preguntas = require("../models/modelo").Preguntas;
  var Resultados = require("../models/modelo").Resultados;
  var nools = require("nools");
  var flow = nools.compile("flow/basic.nools", {
    scope: {
      logger: log
    }
  });
  var Question = flow.getDefined("question");

  app.get('/', function (req, res) {
    res.render('home/home', {
      appName: "75.67",
      pageTitle: "75.67 - Sistemas Automáticos de Diagnóstico y Detección de Fallas I"
    });
  });

  app.get('/resultados', function (req, res) {
    res.render('modelo/resultados', {
      appName: "75.67",
      pageTitle: "75.67 - Resultados",
      resultados: Resultados
    });
  });

  app.get('/preguntas', function (req, res) {
    res.render('modelo/preguntas', {
      appName: "75.67",
      pageTitle: "75.67 - Preguntas",
      preguntas: Preguntas
    });
  });

  app.get('/comenzar', function (req, res) {
    req.session.test = new TestModel();
    res.render('analisis/comenzar', {
      appName: "75.67",
      pageTitle: "75.67 - Sistemas Automáticos de Diagnóstico y Detección de Fallas I"
    });
  });

  app.get('/analisis', function (req, res) {
    var pregunta = new Pregunta(0);
    res.render('analisis/analisis', {
      appName: "75.67",
      pageTitle: "75.67 - Análisis",
      pregunta: pregunta
    });
  });

  app.post('/analisis', function (req, res) {
    var pregunta = new Pregunta(req.body.pregunta);
    pregunta.responder(parseInt(req.body.respuesta));
    ejecutarReglas(req, res, pregunta);
  });

  app.get('/resultado', function (req, res) {

    var flow = nools.flow("Diagnosis", function (flow) {

      this.rule("R0", [Object, "r", "r.plas == 'plas2'"], function (facts) {
        console.log("Match!");
        console.log(facts);
      });

    });

    var rulesFired = [];

    var session = flow.getSession();
    session.assert(req.session.test.optionsSelected);

    //now fire the rules
    session.on("fire", function (ruleName) {
      rulesFired.push(ruleName);
    })
    .match(function () {
      console.log(rulesFired);

      var resultado;

      if (rulesFired.length == 0) {
        resultado = Resultados[0];
      } else {
        resultado = Resultados[1];
      }

      res.render('analisis/resultado', {
        appName: "75.67",
        pageTitle: "75.67 - Resultado",
        resultado: resultado
      });
    });
  });

  function ejecutarReglas(req, res, pregunta) {
    var currTest = req.session.test;
    currTest.preguntas[pregunta.id] = pregunta;
    currTest.optionsSelected = currTest.optionsSelected || {};

    session = flow.getSession(new Question({
      id: pregunta.id,
      ans: pregunta.respuesta
    }));

    _(['plas', 'pres', 'skin', 'mass', 'pedi', 'age', 'preg']).forEach(function (variableName) {
      session.on(variableName, function (result) {
        currTest.optionsSelected[variableName] = result;
      });
    });

    session.match()
    .then(function () {
      req.session.test = currTest;
      var siguiente = pregunta.siguiente();
      if (siguiente) {
        log.info("Siguiente pregunta: " + JSON.stringify(siguiente));
        res.render('analisis/analisis', {
          appName: "75.67",
          pageTitle: "75.67 - Hacer test",
          pregunta: siguiente
        });
      } else {
        res.redirect("/resultado");
      }
    });
  }

};
