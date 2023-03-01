const comando = document.getElementById("desplegable__datos");
const contenido = document.getElementById('contenido');
const ocultar = document.getElementById("cerrar__desplegable");

const comando2 = document.getElementById("desplegable__datos2");
const contenido2 = document.getElementById('contenido2');
const ocultar2 = document.getElementById("cerrar__desplegable2");

const comando3 = document.getElementById("desplegable__datos3");
const contenido3 = document.getElementById('contenido3');
const ocultar3 = document.getElementById("cerrar__desplegable3");



comando.addEventListener('click', ()=>{
    console.log('hice click');
    contenido.style.display = 'flex'
})
document.getElementById("cerrar__desplegable").addEventListener('click', ()=>{
    console.log('hice click');
    contenido.style.display = 'none';
})
const sentence= document.getElementById('about-title')

comando2.addEventListener('click', ()=>{
    console.log('hice click');
    contenido2.style.display = 'flex'
})
document.getElementById("cerrar__desplegable2").addEventListener('click', ()=>{
    console.log('hice click');
    contenido2.style.display = 'none';
})

comando3.addEventListener('click', ()=>{
    console.log('hice click');
    contenido3.style.display = 'flex'
})
document.getElementById("cerrar__desplegable3").addEventListener('click', ()=>{
    console.log('hice click');
    contenido3.style.display = 'none';
})