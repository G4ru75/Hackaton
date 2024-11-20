document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    
    if (name && email && amount) {
        alert(`Gracias, ${name}, por tu donación de $${amount}. Se ha enviado un recibo a ${email}.`);
        // Aquí puedes agregar lógica para procesar la donación
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

