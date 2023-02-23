//hay 3 maneras de seleccionar y modificar elementos html existentes en el documento

//1. querySelector                     clase  - elemento html
const heading = document.querySelector('.header_texto h2')  //selecciona 0 o 1 elemento                             
//                                        id
//const heading = document.querySelector('#cabeza')  

heading.textContent = "Blog de café";


//2. querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //selecciona 0 o todos los elementos que concuerden
console.log(enlaces[2]);


//3. getElementById


//____________________________________________________________________________________________________

//hay maneras de crear elementos html en el documento


// Ejemplo

const nuevoEnlace = document.createElement('a');//crear un nuevo enlace
nuevoEnlace.href = "nuevo-enlace.html"; //agregar el href
nuevoEnlace.textContent = "Nuevo enlace"; //agregar el texto
nuevoEnlace.classList.add("navegacion"); //agregar la clase

const enlace = document.querySelector(".navegacion");//agregarlo al documento
//enlace.appendChild(nuevoEnlace);



//____________________________________________________________________________________________________


//EVENTOS

//para eventos que suceden en la ventana (window)

window.addEventListener('load', function(){

 console.log("evento en ventana con addeventlistener");
});

window.onload = function(){
    console.log("evento en ventana con onload")
};

//para eventos que suceden en el documento html

document.addEventListener('DOMContentLoaded', function(){
 console.log("evento en documento html");
});


//Para seleccionar elementos en el html y darles un comportamiento
const btnEnviar = document.querySelector(".boton_entrada");
btnEnviar.addEventListener('click', function(e){
   //e.preventDefault();
   // console.log("enviando formulario");
});

//Ejemplo: Al dar click en el botón Enviar se ejecute el Evento submit del formulario
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');//se organizan las constantes o variables aqui
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);//luego los eventlisteners
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit',function(e){
    e.preventDefault();

    // validacion del formulario
    const { nombre, email, mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === ''){
        window.alert('Todos los campos son obligatorios.');//se puede asi, o usando la funcion mostrarError
        return;

    }
    mostrarCorrecto('El mensaje ha sido enviado correctamente.');


   

});


//Eventos de los inputs y textarea









function leerTexto(e){// de ultimo las funciones
    

    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function mostrarError(mensaje){
    const alerta = document.createElement('p');
    alerta.textContent=mensaje;
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function mostrarCorrecto(mensaje){
    const aviso = document.createElement('p');
    aviso.textContent=mensaje;
    aviso.classList.add('envio_correcto');
    formulario.appendChild(aviso);
    setTimeout(() => {
        aviso.remove();
    }, 5000);
}