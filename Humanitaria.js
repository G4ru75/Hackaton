const images = [
    'url("SaludHumanitaria.jpg")',
    'url("SostenibilidadHumanitaria.jpg")',
    'url("EducacionHumanitaria.jpg")'
];

let currentIndex = 0;
const sectionElement = document.getElementById('section');

function changeBackgroundImage() {
    SelectionElement.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); // va a cambiarla imagen cada 5 segundos
window.onload = changeBackgroundImage; // va a cambiar la imagen cada vez que la página carge
