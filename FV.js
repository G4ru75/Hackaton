function mostrarSeccionOcupacion() 
{
    var ocupacion = document.getElementById('ocupacion').value;
    var estudiante = document.getElementById('info-estudiante');
    var trabaja = document.getElementById('info-trabaja');
    var otraOcupacion = document.getElementById('info-otra-ocupacion');
    
    estudiante.classList.add('oculto');
    trabaja.classList.add('oculto');
    otraOcupacion.classList.add('oculto');
    
    if (ocupacion === 'estudiante') {
        estudiante.classList.remove('oculto');
    } else if (ocupacion === 'trabaja') {
        trabaja.classList.remove('oculto');
    } else if (ocupacion === 'otra') {
        otraOcupacion.classList.remove('oculto');
    }
}

function mostrarSeccionVoluntariado() 
{
var voluntariado = document.getElementById('voluntariado').value;
var infoVoluntariado = document.getElementById('info-voluntariado');

if (voluntariado === 'si') {
infoVoluntariado.classList.remove('oculto');
} else {
infoVoluntariado.classList.add('oculto');
}
}


function mostrarMensajeExito(event) 
{
    event.preventDefault();
    incrementarContador(); // Se llama a la funcion para contar los voluntarios registrados
    alert("Se ha registrado su inscripcion, se le comunicara por correo electronico");
}
document.getElementById('uploadForm').addEventListener('submit', function(event) {

var fileInput = document.getElementById('documento');
var filePath = fileInput.value;
var allowedExtensions = /(\.pdf)$/i;

if (!allowedExtensions.exec(filePath))
{
    alert('Por favor suba un archivo válido: .doc, .docx, .pdf');
    fileInput.value = '';
    event.preventDefault();
    return false;
} else 
{
    alert('Documento subido con éxito');
}
});

// Función para inicializar el contador al entrar en la página
function IniciarContador() {
    // Obtén el contador del localStorage si no existe se va a empezar en 0
    const Contador = localStorage.getItem('ContadorVoluntarios') || 0;
    document.getElementById('ContadorVoluntarios').textContent = Contador;
}

// Función para incrementar el contador
function incrementarContador() {
    let contador = parseInt(localStorage.getItem('ContadorVoluntarios')) || 0;
    contador++;
    localStorage.setItem('ContadorVoluntarios', contador); // Actualiza el valor en localStorage
    document.getElementById('ContadorVoluntarios').textContent = contador;
}

// Configura el evento al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    IniciarContador();
    const formulario = document.getElementById('Voluntarios');
    if (formulario) {
        formulario.addEventListener('submit', mostrarMensajeExito);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada, inicializando eventos...");
    const formulario = document.getElementById('Voluntarios');
    const botonGuardar = document.getElementById('guardarArchivo');

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();
            guardarVoluntario();
            incrementarContador();
            alert("Se ha registrado su inscripción. Se le comunicará por correo electrónico.");
        });
    }

    if (botonGuardar) {
        botonGuardar.addEventListener('click', () => {
            descargarDatos();
        });
    }
});

// Creo una lista para almacenar los datos de los voluntarios
let listaVoluntarios = [];

// Función para guardar los voluntario
function guardarVoluntario() {
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const lugarNacimiento = document.getElementById('lugar-nacimiento').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const tipoDocumento = document.getElementById('tipo-documento').value;
    const numeroDocumento = document.getElementById('numero-documento').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Creo un objeto con los datos del voluntario
    const voluntario = {
        nombre,
        direccion,
        lugarNacimiento,
        fechaNacimiento,
        tipoDocumento,
        numeroDocumento,
        email,
        telefono
    };

    // Guardo y confirmo el objeto en el array
    listaVoluntarios.push(voluntario);
    console.log("Voluntario guardado:", voluntario);
}

// Función para descargar los datos en un archivo
function descargarDatos() {
    if (listaVoluntarios.length === 0) {
        alert("No hay voluntarios registrados para guardar.");
        return;
    }

    // Convertir los datos a formato json o texto
    const datos = JSON.stringify(listaVoluntarios, null, 2);

    // Crear un blob y generar el archivo
    const blob = new Blob([datos], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Crear un enlace para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'voluntarios.json'; // Nombre del archivo
    document.body.appendChild(a);
    a.click();

    // Limpiar el DOM
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log("Archivo descargado.");
}



    