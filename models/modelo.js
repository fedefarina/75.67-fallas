var preguntas = [
    {
        pregunta: "Precipitación pluvial ocurrida entre R3-R5.5",
        descripcion: "Se relaciona con la frecuencia y duración del mojado foliar. Germinación y diseminación de esporas. Es uno de los ítems de mayor importancia. Esta basada en la cantidad de precipitaciones que se acumulan desde <b>R3</b> en adelante. <br> Si cuenta con la predicción meteorológica con alta probabilidad que lloverá entre <b>R3-R5</b> y quiere asumir ese riesgo, puede aplicar en <b>R3</b> y probablemente tendrá mejor respuesta (aunque no estadísticamente significativa) que en <b>R5</b> si es que ellas lluvias pronosticadas finalmente ocurren dentro de los 15 días aproximadamente. Sin embargo, si se aplicara en <b>R3</b> y no lloviera lo suficiente (al menos 50 mm acumulativamente en los 15 días posteriores a esa aplicación), esta pulverización probablemente fracase. Asimismo si llueve abundantemente desde <b>R3-R4</b> sin que llegue <b>R5</b> y el sistema le da la orientación, podrá asimismo adelantarse la aplicación antes de que llegue <b>R5</b>.",
        respuestas : [
            "Menos de 50 mm",
            "50 mm o más",
        ]
    },
    {
        pregunta: "Precipitación pluvial ocurrida",
        descripcion: "Si el 75 % de la misma correspondió a lluvias de 7 mm o más Se fundamenta en que las lluvias que superan el umbral de 7 mm (excluyen lloviznas y lluvias ligeras) podrían asegurar una energía mínima para producir dispersión horizontal y vertical de esporas, muy requerido por los picnidios de <i>Septoria glycines</i>, <i>Phomopsis sojae</i>, y también para asegurar el mojado para la infección de conidios de <i>Cercospora kikuchii</i>.",
        respuestas : [
            "Menos de 50 mm",
            "Entre 50 y 100 mm",
            "Entre 100 y 150 mm",
            "Entre 150 y 200 mm",
            "Más de 200 mm"
        ]
    },
    {
        pregunta: "Rotación de cultivos",
        descripcion: "Historia agronómica del lote con especies no hospedantes de patógenos de soja. Bajo rotación habrá menos fuente de inóculo.",
        respuestas : [
            "Se sembró soja en la siembra anterior",
            "Se sembró trigo, maíz o sorgo en la siembra anterior "
        ]
    },
    {
        pregunta: "Sistema de labranza",
        descripcion: "Las <b>EFC</b> son en causadas en su mayoría por agentes necrotróficos que sobreviven en rastrojo, de allí su valoración.",
        respuestas : [
            "Labranza cero o siembra directa",
            "Otro sistema distinto a labranza cero"
        ]
    },
    {
        pregunta: "Presencia de EFC en el cultivo de soja del año anterior (rastrojo)",
        descripcion: "Es conveniente conocer los antecedentes sanitarios del lote si es que proviene de soja e ira nuevamente a soja. Es una forma indirecta de estimar la fuente de inóculo proveniente del rastrojo anterior. Se espera que si existieron síntomas el año anterior sus agentes causales estén sobreviviendo en los rastrojos presentes en el mismo lote.",
        respuestas : [
            "Hubo siembra en el año anterior y hubo presencia de EFC",
            "Hubo siembra en el año anterior y no hubo presencia de EFC",
            "No hubo siembra de soja en el año anterior"
        ]
    },
    {
        pregunta: "Calidad sanitaria de la semilla",
        descripcion: "Se considera los patógenos asociados a la semilla y transmitidos a la plántula; en áreas bajo rotación de cultivos. Si no se hace tratamiento de semilla la probabilidad de introducir o aumentar los patógenos causantes de <b>EFC</b> es mayor.",
        respuestas : [
            "Presencia de 1 o 2 agentes patógenos",
            "Presencia de 3 o más agentes patógenos",
            "No se ha realizado análisis de calidad sanitaria o se desconoce la misma"
        ]
    },
    {
        pregunta: "Ciclo del cultivar",
        descripcion: "Cuanto más largo sea el ciclo, mayor su probabilidad para enfermarse",
        respuestas : [
            "Duración de menos de 6 meses",
            "Duración de 6 meses",
            "Duración de 7 meses",
            "Duración de 8 meses",
            "Duración de más de 8 meses"
        ]
    },
    {
        pregunta : "Producción destinada a semilla (destino de la producción)",
        descripcion: "Si el lote es destinado a semilla, su manejo debe jerarquizarse en miras del control químico Esta práctica merece decisiones técnicas que tiendan a mejorar la calidad sanitaria de la semilla a cosechar.",
        respuestas : [
            "Producción destinada a semilla",
            "Producción destinada a consumo humano"
        ]
    },
    {
        pregunta : "Potencial productivo del lote",
        descripcion: "Tomar como base la productividad media del productor en años sin adversidades climáticas u otro factor anormal.",
        respuestas : [
            "Bajo",
            "Moderado",
            "Alto"
        ]
    },
    {
        pregunta: "Presencia actual de síntomas en el lote",
        descripcion: "Considerar este item al momento de la calificación. Algunas veces pueden observarse síntomas de <i>Septoria glycines</i>, <i>Colletotrichum truncatum</i> (mancha marrón, antracnosisi) o <i>Cercospora kikuchii</i> (tizón morado) más tempranamente que pre-anuncian la presencia epidemiológica de las <b>EFC</b>. Para ello es necesario reconocer durante el monitoreo algunos síntomas característicos de las enfermedades causadas por estos patógenos. La <b>EFC</b> que puede manifestar síntomas más tempranamente, aún en etapas vegetativas es la mancha marrón causada por <i>Septoria glycines</i> es probable encontrar folíolos con pequeñas lesiones necróticas (marrones) rodeadas por un halo clorótico, en el tercio inferior de las plantas. Posteriormente las hojas amarillean y caen, observándose una típica defoliación basal. Para confirmar tempranamente la presencia de antracnosis es importante detectar necrosis en la nervadura en el envés de la hoja, o visualizar pecíolos de folíolos necrosados, a partir de floración en adelante. Finalmente y para el caso de <i>Cercospora kikuchii</i> es también posible detectar su temprana presencia al observar manchas violáceas o púrpuras en foliolos del tercio medio y superior de las plantas o en los pecíolos de sus foliolos principalmente en plantas donde reciban mas intensa y directamente la radiación solar (por Ej. borduras).",
        respuestas : [
            "No hay síntomas en el lote",
            "Hay síntomas de 1 o 2 agentes patógenos",
            "Hay síntomas de 3 o más agentes patógenos"
        ]
    }
];

var resultados = [
    {
      id: 0,
      titulo: "Baja probabilidad de retorno económico de la aplicación de fungicida",
      descripcion: "Dada las escasas lluvias y/o desconocimiento de la calidad de las semillas no aseguran que se recupere la inversión económica realizada para la aplicación de fungicida."
    },
    {
      id: 1,
      titulo: "Discutir con un técnico asesor sobre cómo aplicar el fungicida",
      descripcion: "Hay probabilidad de que recupere la inversión económica realizada. Debe discutir con el técnico asesor la conveniencia económica y técnica de la aplicación y analizar los pronósticos de lluvia venideros."
    },
    {
      id: 2,
      titulo: "Alta probabilidad de retorno económico de la aplicación de fungicida",
      descripcion: "Dada las abundantes lluvias y buena calidad sanitaria de las semillas se asegura que se recupere la inversión económica realizada para la aplicación de fungicida."
    }
];

function Pregunta(id) {
    var pregunta = preguntas[parseInt(id)];
    this.pregunta = pregunta.pregunta;
    this.descripcion = pregunta.descripcion;
    this.id = parseInt(id);
    this.respuestas = pregunta.respuestas;
    this.respuesta = undefined;
}

Pregunta.prototype.responder = function(respuesta) {
    this.respuesta = ((parseInt(respuesta) % this.respuestas.length) == parseInt(respuesta)) ? parseInt(respuesta) : undefined;
};

Pregunta.prototype.id = function() {
    return this.pregunta.id;
};

Pregunta.prototype.pregunta = function() {
    return this.pregunta;
};

Pregunta.prototype.respuestas = function() {
    return this.respuestas;
};

Pregunta.prototype.respuesta = function() {
    return this.respuesta;
};

Pregunta.prototype.siguiente = function() {
    if (this.id + 1 < preguntas.length)
        return new Pregunta(this.id + 1);
    return undefined;
};

function TestModel() {
    this.preguntas = new Array(preguntas.length);
    this.puntaje = 0;
    this.resultado = undefined;
}

module.exports = Pregunta;
module.exports.preguntasCount = preguntas.length;
module.exports.TestModel = TestModel;
module.exports.Preguntas = preguntas;
module.exports.Resultados = resultados;
