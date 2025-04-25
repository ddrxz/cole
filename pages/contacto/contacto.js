function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("¡Formulario enviado correctamente!");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            alert("Hubo un error al enviar el formulario.");
        }
    }).catch(error => {
        alert("Error al enviar el formulario.");
    });
}

function handleSubmit(event) {
    
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    if (origen !== 'Firmat' && destino !== 'Firmat') {
        alert('Debe seleccionar "Firmat" en el campo de Origen o Destino.');
        event.preventDefault(); 
        return false;  
    }
    return true;  
}

