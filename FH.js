document.addEventListener('DOMContentLoaded', function () 
{
    var customSelect = document.querySelector('.custom-select');
    var selected = customSelect.querySelector('.select-selected');
    var items = customSelect.querySelector('.select-items');

    selected.addEventListener('click', function () 
    {
        items.style.display = items.style.display === 'block' ? 'none' : 'block';
    });

var options = customSelect.querySelectorAll('.select-items div');
options.forEach(function (option) 
{
    option.addEventListener('click', function ()
    {
        selected.innerHTML = option.innerHTML;
        items.style.display = 'none';
        options.forEach(function (opt)
         {
            opt.classList.remove('same-as-selected');
         });

        option.classList.add('same-as-selected');
    });
});

document.addEventListener('click', function (event)
{
    if (!customSelect.contains(event.target)) 
        {
            items.style.display = 'none';
        }
    });
});

function mostrarMensajeExito(event) 
{
    event.preventDefault(); // Previene el envío del formulario para mostrar el mensaje de éxito
    alert("Su donación ha sido exitosa. ¡Gracias por su generosidad!");
}
