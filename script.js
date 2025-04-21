function generarPDF(elementId, filename) {
    const botonPDF = document.querySelector('.btn-danger'); 
    if (botonPDF) {
        botonPDF.style.display = 'none'; 
    }

    const opciones = {
        margin: 1,
        filename: filename + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const element = document.getElementById(elementId);
    if (element) {
        html2pdf().from(element).set(opciones).save().finally(() => {
            if (botonPDF) {
                botonPDF.style.display = 'inline-block'; 
            }
        });
    } else {
        console.error(`No se encontró el elemento con el ID '${elementId}'.`);
        if (botonPDF) {
            botonPDF.style.display = 'inline-block'; 
        }
    }
}