const comando = document.getElementById("desplegable__datos");
const contenido = document.getElementById('contenido');


comando.addEventListener('click', ()=>{
    console.log('hice click');
    

    contenido.style.display = 'flex'
    
})
document.getElementById("contenido").addEventListener('click', ()=>{
    console.log('hice click');

    contenido.style.display = 'none';
})
const sentence= document.getElementById('about-title')
