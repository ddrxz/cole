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
