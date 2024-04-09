// Objeto que contiene las traducciones
var translations = {
    // Clave del texto: {español: 'Texto en español', inglés: 'Texto en inglés'}
    'Inicio': {es: 'Inicio', en: 'Home'},
    'Sobre mí': {es: 'Sobre mí', en: 'About Me'},
    'Proyectos': {es: 'Proyectos', en: 'Projects'},
    'Clientes': {es: 'Clientes', en: 'Clients'},
    'Contacto': {es: 'Contacto', en: 'Contact'},
    'Hola soy Juan Desarrollador Web': {es: 'Hola soy Juan Desarrollador Web', en: 'Hi, I\'m Juan, Web Developer'},
    'MI EXPERIENCIA': {es: 'MI EXPERIENCIA', en: 'MY EXPERIENCE'},
    'ME ESPECIALIZO EN CREAR PAGINAS WEB DE LA MEJOR CALIDAD POSIBLE': {es: 'ME ESPECIALIZO EN CREAR PAGINAS WEB DE LA MEJOR CALIDAD POSIBLE', en: 'I specialize in creating high-quality websites'},
    'Contando con varios años de trayectoria, dejo algunos de mis proyectos a su disposición': {es: 'Contando con varios años de trayectoria, dejo algunos de mis proyectos a su disposición', en: 'With several years of experience, I leave some of my projects at your disposal'},
    'Descargar CV': {es: 'Descargar CV', en: 'Download CV'},
    'Proyectos destacados': {es: 'Proyectos destacados', en: 'Featured Projects'},
    'En el anterior proyecto se presenta un pagina en HTML de videojuegos': {es: 'En el anterior proyecto se presenta un pagina en HTML de videojuegos', en: 'The previous project presents a HTML video games page'},
    'LEER MÁS': {es: 'LEER MÁS', en: 'READ MORE'},
    'PROYECTOS TERMINADOS': {es: 'PROYECTOS TERMINADOS', en: 'COMPLETED PROJECTS'},
    'CLIENTES SATISFECHOS': {es: 'CLIENTES SATISFECHOS', en: 'SATISFIED CLIENTS'},
    'CURSOS EN LINEA': {es: 'CURSOS EN LINEA', en: 'ONLINE COURSES'},
    'Contactame ahora mismo': {es: 'Contactame ahora mismo', en: 'Contact me right now'},
    'ahora mismo': {es: 'ahora mismo', en: 'right now'},
    'Contactame en caso de que necesites ayuda en algun proyecto, o algun curso': {es: 'Contactame en caso de que necesites ayuda en algun proyecto, o algun curso', en: 'Contact me if you need help with a project, or a course'},
    'Enviar': {es: 'Enviar', en: 'Send'},
    'Historia': {es: 'Historia', en: 'History'},
    'Equipo de trabajo': {es: 'Equipo de trabajo', en: 'Team'},
    'Términos y Condiciones': {es: 'Términos y Condiciones', en: 'Terms and Conditions'},
    'Póliticas de privacidad': {es: 'Póliticas de privacidad', en: 'Privacy Policy'},
    'Otras Cosas': {es: 'Otras Cosas', en: 'Other Things'},
    'Noticias e historias': {es: 'Noticias e historias', en: 'News and Stories'},
    'Publicaciones': {es: 'Publicaciones', en: 'Publications'},
    'Marketing': {es: 'Marketing', en: 'Marketing'},
    'Recomendaciones': {es: 'Recomendaciones', en: 'Recommendations'},
    'Ayuda': {es: 'Ayuda', en: 'Help'},
    'Seguime': {es: 'Seguime', en: 'Follow me'},
    'Subscribite para recibir el Boletín de noticias': {es: 'Subscribite para recibir el Boletín de noticias', en: 'Subscribe to receive the Newsletter'},
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    document.documentElement.lang = lang; // Cambia el atributo lang de la etiqueta html
    document.documentElement.setAttribute('data-lang', lang); // Cambia el atributo data-lang de la etiqueta html

    // Actualiza el contenido de las etiquetas que tienen el atributo data-lang
    updateContent(lang);
}

// Función para actualizar el contenido según el idioma seleccionado
function updateContent(lang) {
    // Obtiene todas las etiquetas con el atributo data-lang
    var elements = document.querySelectorAll('[data-lang]');
    
    // Recorre cada elemento y actualiza su contenido según el idioma seleccionado
    elements.forEach(function(element) {
        var key = element.getAttribute('data-lang'); // Obtiene la clave del texto
        var translatedText = translations[key][lang]; // Obtiene el texto traducido según el idioma seleccionado
        element.innerText = translatedText; // Actualiza el texto del elemento
    });
}

// Inicializa el contenido en español al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('es');
});

//Funcion que aplica las animaciones de las habilidades
let proyectos = 0;
let clientes = 0;
let cursos =0;
let intervalProyectos = null;
let intervalclientes = null;
let intervalCursos = null;

function animacionNumeros() {
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && proyectos == 0){
        intervalo = setInterval(actualizarContador, 60);
    }
}

function actualizarContador() {
    // Verificamos si hemos llegado a 50
    if (proyectos <= 50) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contProyectos").textContent = proyectos;
        // Incrementamos el contador en 1
        proyectos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalProyectos);
    }
    // Verificamos si hemos llegado a 30
    if (clientes <= 30) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contClientes").textContent = clientes;
        // Incrementamos el contador en 1
        clientes++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalclientes);
    }
    // Verificamos si hemos llegado a 40
    if (cursos <= 40) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contCursos").textContent = cursos;
        // Incrementamos el contador en 1
        cursos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalCursos);
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    animacionNumeros();
    animacionesSkills();
}

let visible=false;

function abrirCerrarMenu() {    
    if(visible == false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    } else {
        document.getElementById("nav").className = "";
        visible = false;
    }
}

function animacionesSkills() {
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 400){
        document.getElementById("dw").className = " progreso dw";
        document.getElementById("dg").className = " progreso dg";
        document.getElementById("bd").className = " progreso bd";
        document.getElementById("md").className = " progreso md";
    }
}
