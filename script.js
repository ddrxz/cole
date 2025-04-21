function generarPDF() {
    const opciones = {
      margin:       1,
      filename:     'horarios_colectivos.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Genera el PDF usando el contenido de la tabla con el id "horarios-table"
    const element = document.getElementById('horarios-table');
    html2pdf().from(element).set(opciones).save();
  }