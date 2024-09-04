      // Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
      let roles = [
        { id: 10, nombrerol: 'Administrador' },
        { id: 20, nombrerol: 'Empleado'},
      ];

      // Función para renderizar la tabla
      function renderTable() {
  const tbody = document.querySelector('#rolesTable tbody');
  tbody.innerHTML = '';
  roles.forEach((item) => {
    const row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.nombrerol}</td>
        <td class="actions-btn">
          <button class="btn btn-warning btn-sm edit-btn"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>
          <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

      // Captura el formulario y agrega un nuevo rol
document.getElementById('permissionsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const roleName = document.getElementById('roleName').value;
    const roleStatus = document.getElementById('roleStatus').value;
    
    // Puedes manejar el ID de forma más sofisticada, aquí solo incrementa según el tamaño del array
    const newId = roles.length + 1; 

    // Crear el nuevo rol
    const newRol = {
        id: newId,
        nombrerol: roleName,
        estado: roleStatus,
    };

    // Agregar el nuevo rol al array de roles
    roles.push(newRol);

    // Volver a renderizar la tabla para mostrar el nuevo rol
    renderTable();

    // Cierra el modal después de agregar
    modal.style.display = "none";
});

// Inicialización de la tabla con datos simulados
renderTable();
    
      // Obtener el modal
      var modal = document.getElementById("myModal");

      // Obtener el botón que abre el modal
      var btn = document.getElementById("openModalBtn");

      // Obtener el elemento <span> que cierra el modal
      var span = document.getElementsByClassName("close")[0];

      // Cuando el usuario hace clic en el botón, abre el modal 
      btn.onclick = function() {
          modal.style.display = "block";
      }

      // Cuando el usuario hace clic en <span> (x), cierra el modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // Cuando el usuario hace clic fuera del modal, cierra el modal
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
 
