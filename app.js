//menu//
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
});

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != hamburguer){
           menu.classList.toggle("spread")
           }
    
});
//fin de menu//

//galeria//
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contendorLight = document.querySelector('.imagen-Light')
const hamburguer1 = document.querySelector('.hamburguer')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))  

    })
});

contendorLight.addEventListener('click', (e)=>{
    if (e.target !== imagenesLight) {
        contendorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        hamburguer1.style.opacity = '1';
    }      
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contendorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'

}
//fin de galeria

//formulario//
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_r43fslq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
//formulario//


