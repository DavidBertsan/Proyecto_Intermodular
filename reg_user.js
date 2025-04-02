document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Crear un objeto vacío para almacenar los datos
    const formData = {};
  
    // Obtener todos los elementos del formulario
    const formElements = this.elements;
  
    // Iterar sobre los elementos del formulario
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
  
      // Ignorar botones y elementos sin nombre
      if (element.name && element.type !== 'submit') {
        formData[element.name] = element.value;
      }
    }
  
    // Convertir el objeto a JSON
    const jsonData = JSON.stringify(formData, null, 2);
  
    document.getElementById('resultado').textContent = jsonData;

    // Mostrar el JSON en la consola
    console.log(jsonData);
  });