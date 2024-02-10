"use strict"

let menuVisible = false;
// Función que oculta o muestra el menú//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    // Oculto el menú una vez seleccionado una opción//
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

// Función para enviar el mensaje //

const nombre = document.getElementById('nombre')
const telefono = document.getElementById('telefono')
const email = document.getElementById('email')
const mensaje = document.getElementById('mensaje')
const form = document.getElementById('form')
const parrafo = document.getElementById('advertencia')

form.addEventListener('submit', e=>{
    e.preventDefault()
    let advertencia = ""
    let entrar = false
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if(nombre.value.length <6){
      advertencia += 'El nombre no es valido <br>'
      entrar = true
    }
    if(telefono.value.length < 8){
        advertencia += 'El telefono no es valido <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        advertencia += 'El email no es valido <br>'
        entrar = true
    }
    if(mensaje.value.length < 10){
        advertencia += ' El mensaje a superado el maximo de los carácteres <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = advertencia
    } else{
        parrafo.innerHTML = "Enviado"
    }
})


