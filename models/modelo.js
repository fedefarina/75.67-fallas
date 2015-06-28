var carreras =[
    { id: 0, nombre: "Licenciatura en matemática", descripcion: "El licenciado en Matemática es un profesional con nivel y entrenamiento de excelencia. De acuerdo a su interés, los licenciados en Matemática están en condiciones de: <br>-Seguir estudios de Doctorado y dedicarse a la investigación a nivel internacional<br>-Ejercer la docencia universitaria en otras carreras que requieran cursos de matemática<br>-Insertarse laboralmente en la actividad privada (industrias y empresas consultoras, fundamentalmente) y en institutos de investigación o desarrollo tecnológico<br>-Trabajar en grupos interdisciplinarios con graduados de las distintas carreras de nuestra facultad"},
    { id: 1, nombre: "Licenciatura en física", descripcion: "Los Licenciados en Ciencias Físicas pueden ejercer su profesión tanto en la actividad pública como en la privada. La actividad docente es destacada en el ámbito universitario como también en el de la enseñanza secundaria. La actividad de investigación se desarrolla principalmente en las facultades e institutos de ciencias de todo el país y en menor grado en la industria privada. "},
    { id: 2, nombre: "Licenciatura en química", descripcion: "El Licenciado en Ciencias Químicas puede ejercer su profesión tanto en la actividad pública como en la privada. La actividad docente es destacada en el ámbito universitario y en el de la enseñanza secundaria. La actividad de investigación se desarrolla principalmente en facultades e institutos de ciencias de todo el país y, en menor grado, en la industria (alimenticia, textil, del plástico, del papel, farmacéutica, etc.)."},
    { id: 3, nombre: "Licenciatura en Ciencias de la Computación", descripcion: "La tendencia actual, en la cual cada vez más empresas realizan a la vez investigación y desarrollo, hace que la demanda de recursos humanos capacitados esté en constante expansión. Hay en este momento en todo el mundo mucho menos profesionales de informática que los que se demandan. Sin embargo, para acceder a los puestos laborales mejor remunerados se requiere una formación mixta que es ampliamente satisfecha por el perfil de nuestros estudiantes y egresados.<br>Es muy común que a partir del segundo año de la carrera nuestros alumnos comiencen a trabajar en empresas vinculadas al desarrollo de software, insertándose desde temprano en el mercado laboral. Actualmente hay una gran oferta de trabajos muy bien remunerados, algunos de entre cuatro y seis horas diarias, ya sea directamente en empresas o mediante convenios de pasantías, lo que hace posible trabajar y estudiar al mismo tiempo. Además, todas las materias de la carrera se cursan en la misma banda horaria, comenzando a partir de las 17 hs.<br>Nuestra carrera se distingue también por tener un componente científico, dado que es una de las pocas en donde se realiza investigación en temas de punta a nivel internacional. Los alumnos que buscan un perfil más académico pueden conectarse con los diferentes grupos de investigación que trabajan en temas tan diversos como robótica, procesamiento de imágenes, bioinformática, desarrollo de juegos, seguridad informática, redes de comunicaciones, ingeniería de software, etc. Existe una gran oferta de becas de investigación y la posibilidad de asistir a congresos nacionales e internacionales. Los estudiantes pueden complementar, si lo desean, su carrera académica realizando un doctorado en la facultad o en el exterior. "},
    { id: 4, nombre: "Ingeniería Civil", descripcion: "El ingeniero civil está capacitado para realizar el estudio, proyecto, diseño, calculo de estructuras, dirección, inspección, construcción, explotación y mantenimiento de: edificios industriales y urbanos, obras de embalse, gestión y abastecimiento de agua e instalaciones hidromecánicas, obras vinculadas con los diversos modos de transporte (vial, ferroviario, fluvial, marítimo y aéreo) y obras vinculadas al planeamiento urbano."},
    { id: 5, nombre: "Ingeniería Electrónica", descripcion: "El ingeniero electrónico posee una profunda formación en todo lo referido a sistemas, circuitos e instrumentos electrónicos y sus aplicaciones.<br><br>Estos conocimientos lo capacitan para:<br>. Proyectar y ejecutar sistemas de enlace de comunicaciones, de procesamiento electrónico de datos (hardware), incluyendo su procesamiento (software).<br>. Estudiar, construir y operar sistemas, subsistemas y componentes para la generación, transmisión, recepción, distribución, reproducción y procesamiento de señales electromagnéticas, ópticas y acústicas.<br>. Diseñar y fabricar equipos electrónicos e incorporar subsistemas electrónicos embebidos a máquinas, artefactos y procesos de distinto tipo.<br>. Proyectar sistemas de comunicaciones, automatismos para control industrial y audio profesional.<br>. Proyectar y diseñar sistemas de inteligencia en edificios y viviendas, tráfico urbano y carreteras, sistemas y medios de transporte.<br>. Entender y certificar en mediciones de ruido y vibraciones siguiendo la legislación vigente sobre impacto ambiental."}
];

var preguntas = [
    {
        pregunta: "Precipitación pluvial ocurrida entre R3-R5.5",
        descripcion: "Se relaciona con la frecuencia y duración del mojado foliar. Germinación y diseminación de esporas. Es uno de los ítems de mayor importancia. Esta basada en la cantidad de precipitaciones que se acumulan desde R3 en adelante",
        respuestas : [
            "Menos de 50 mm",
            "50 mm o más",
        ]
    },
    {
        pregunta: "Precipitación pluvial ocurrida",
        descripcion: "Si el 75 % de la misma correspondió a lluvias de 7 mm o más Se fundamenta en que las lluvias que superan el umbral de 7 mm (excluyen lloviznas y lluvias ligeras) podrían asegurar una energía mínima para producir dispersión horizontal y vertical de esporas, muy requerido por los picnidios de S. glycines, Phomopsis, y también para asegurar el mojado para la infección de conidios de Cercospora.",
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
        descripcion: "Las EFC son en causadas en su mayoría por agentes necrotróficos que sobreviven en rastrojo, de allí su valoración.",
        respuestas : [
            "Labranza cero o siembra directa",
            "Otro sistema distinto a labranza cero"
        ]
    },
    {
        pregunta: "Presencia de EFC en el cultivo de soja del año anterior (rastrojo)",
        descripcion: "Es conveniente conocer los antecedentes sanitarios del lote si es que proviene de soja e ira nuevamente a soja. Es una forma indirecta de estimar la fuente de inóculo proveniente del rastrojo anterior. Se espera que si existieron síntomas el año anterior sus agentes causales estén sobreviviendo en los rastrojos presentes en el mismo lote.",
        respuestas : [
            "No hubo siembra de soja en el año anterior",
            "Hubo siembra en el año anterior y no hubo presencia de EFC",
            "Hubo siembra en el año anterior y hubo presencia de EFC"
        ]
    },
    {
        pregunta: "Calidad sanitaria de la semilla",
        descripcion: "Se considera los patógenos asociados a la semilla y transmitidos a la plántula; en áreas bajo rotación de cultivos. Si no se hace tratamiento de semilla la probabilidad de introducir o aumentar los patógenos causantes de EFC es mayor.",
        respuestas : [
            "Presencia de 3 o más agentes patógenos",
            "Presencia de 1 o 2 agentes patógenos",
            "No se ha realizado análisis de calidad sanitaria o se desconoce la misma",
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
            "Alto",
            "Moderado",
            "Bajo"
        ]
    },
    {
        pregunta: "Presencia actual de síntomas en el lote",
        descripcion: "Considerar este item al momento de la calificación. Algunas veces pueden observarse síntomas de Septoria, Colletotrichum (mancha marrón, antracnosisi) o Cercospora (tizón morado) más tempranamente que pre-anuncian la presencia epidemiológica de las EFC. Para ello es necesario reconocer durante el monitoreo algunos síntomas característicos de las enfermedades causadas por estos patógenos. La EFC que puede manifestar síntomas más tempranamente, aún en etapas vegetativas es la mancha marrón causada por. Septoria glycines es probable encontrar folíolos con pequeñas lesiones necróticas (marrones) rodeadas por un halo clorótico, en el tercio inferior de las plantas. Posteriormente las hojas amarillean y caen, observándose una típica defoliación basal. Para confirmar tempranamente la presencia de antracnosis es importante detectar necrosis en la nervadura en el envés de la hoja, o visualizar pecíolos de folíolos necrosados, a partir de floración en adelante. Finalmente y para el caso de Cercospora kikuchii es también posible detectar su temprana presencia al observar manchas violáceas o púrpuras en foliolos del tercio medio y superior de las plantas o en los pecíolos de sus foliolos principalmente en plantas donde reciban mas intensa y directamente la radiación solar (por Ej. borduras).",
        respuestas : [
            "No hay síntomas en el lote",
            "Hay síntomas de 1 o 2 agentes patógenos",
            "Hay síntomas de 3 o más agentes patógenos"
        ]
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
    this.preguntas = new Array(6);
    this.posiblesCarreras = carreras.slice();
    this.resultado = undefined;
}

module.exports = Pregunta;
module.exports.preguntasCount = preguntas.length;

module.exports.TestModel = TestModel;
module.exports.Carreras = carreras;
module.exports.Preguntas = preguntas;
