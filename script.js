// Datos iniciales de habitaciones (simulación de base de datos)
let habitaciones = [
    { id: 1, tipo: 'Sencilla', precio: 100, estado: 'Disponible' },
    { id: 2, tipo: 'Doble', precio: 150, estado: 'Ocupada' },
    { id: 3, tipo: 'Suite', precio: 250, estado: 'Disponible' }
  ];
  
  // Función para mostrar habitaciones en la tabla
  function mostrarHabitaciones() {
    const tabla = document.getElementById('tablaHabitaciones').getElementsByTagName('tbody')[0];
    tabla.innerHTML = ''; // Limpiar tabla antes de agregar los datos
  
    habitaciones.forEach(habitacion => {
      const fila = tabla.insertRow();
      fila.innerHTML = `
        <td>${habitacion.id}</td>
        <td>${habitacion.tipo}</td>
        <td>$${habitacion.precio}</td>
        <td>${habitacion.estado}</td>
        <td><button onclick="eliminarHabitacion(${habitacion.id})">Eliminar</button> <button onclick="editarHabitacion(${habitacion.id})">Editar</button></td>
      `;
    });
  }
  
  // Función para agregar una nueva habitación
  document.getElementById('formAgregarHabitacion').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tipo = document.getElementById('tipo').value;
    const precio = document.getElementById('precio').value;
    const estado = document.getElementById('estado').value;
  
    const nuevaHabitacion = {
      id: habitaciones.length + 1,
      tipo: tipo,
      precio: parseInt(precio),
      estado: estado
    };
  
    habitaciones.push(nuevaHabitacion);
    mostrarHabitaciones();
  
    // Limpiar formulario
    document.getElementById('formAgregarHabitacion').reset();
  });
  
  // Función para eliminar una habitación
  function eliminarHabitacion(id) {
    habitaciones = habitaciones.filter(habitacion => habitacion.id !== id);
    mostrarHabitaciones();
  }
  
  // Función para editar una habitación (por ahora solo actualiza el estado)
  function editarHabitacion(id) {
    const habitacion = habitaciones.find(h => h.id === id);
    const nuevoEstado = prompt('Nuevo estado (Disponible/Ocupada):', habitacion.estado);
  
    if (nuevoEstado && (nuevoEstado === 'Disponible' || nuevoEstado === 'Ocupada')) {
      habitacion.estado = nuevoEstado;
      mostrarHabitaciones();
    } else {
      alert('Estado inválido.');
    }
  }
  
  // Mostrar las habitaciones al cargar la página
  mostrarHabitaciones();
  