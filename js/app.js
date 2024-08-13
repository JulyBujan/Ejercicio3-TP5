document.getElementById('agregarTarea').addEventListener('click', function() {
    const tarea = document.getElementById('tarea');
    const input = tarea.value.trim();

    if (input !== '') {
      
        const lista = document.createElement('lista');
        lista.className = 'list-group-item d-flex justify-content-between';
        lista.textContent = input;

        
        const borrarBoton = document.createElement('boton');
        borrarBoton.className = 'btn btn-danger btn-sm';
        borrarBoton.textContent = 'Eliminar';

        
        lista.appendChild(borrarBoton);

        
        document.getElementById('listaTarea').appendChild(lista);

       
        tarea.value = '';

        
        borrarBoton.addEventListener('click', function() {
            lista.remove();
        });
    }
});