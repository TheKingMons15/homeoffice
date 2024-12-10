/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

document.getElementById('mesajes').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  document.getElementById('main-content').innerHTML = `
      <h1>Mensajes</h1>
      <p>Aquí puedes gestionar tu inventario de productos.</p>
      <p>Agrega, edita o elimina artículos según sea necesario.</p>
  `;
});

// Añade más eventos para las otras secciones si es necesario
document.getElementById('tareas').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('main-content').innerHTML = `
      <h1>Distribución</h1>
      <p>Aquí puedes gestionar la distribución de tus productos.</p>
  `;
});

document.getElementById('proyectos').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('main-content').innerHTML = `
      <h1>calendario</h1>
      <p>Aquí puedes ver y gestionar tus facturas.</p>
  `;
});
document.getElementById('equipo').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('main-content').innerHTML = `
      <h1>calendario</h1>
      <p>Aquí puedes ver y gestionar tus facturas.</p>
  `;
});
document.getElementById('calendario').addEventListener('click', function(event) {
  event.preventDefault();

  // Generar el calendario
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  let calendarHTML = `
    <h1>Calendario - ${date.toLocaleString('es', { month: 'long' })} ${currentYear}</h1>
    <div id="calendar" class="calendar">
      <div class="calendar-header">
  `;

  // Añadir los días de la semana en la cabecera
  daysOfWeek.forEach(day => {
    calendarHTML += `<div class="calendar-day">${day}</div>`;
  });

  calendarHTML += '</div>'; // Fin de la cabecera

  // Crear las filas del calendario
  let currentDay = 1;
  for (let i = 0; i < 6; i++) {
    calendarHTML += '<div class="calendar-row">';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        calendarHTML += '<div class="calendar-cell"></div>'; // Celdas vacías antes del primer día del mes
      } else if (currentDay <= lastDateOfMonth) {
        calendarHTML += `<div class="calendar-cell" onclick="openTaskModal(${currentDay})">${currentDay}</div>`;
        currentDay++;
      }
    }
    calendarHTML += '</div>'; // Fin de la fila
    if (currentDay > lastDateOfMonth) break;
  }

  calendarHTML += '</div>'; // Fin del calendario

  // Cambiar el contenido de main-content con el calendario
  document.getElementById('main-content').innerHTML = calendarHTML;

  // Mostrar el modal para asignar tarea
  const taskModal = document.getElementById('taskModal');
  const closeModal = document.getElementById('closeModal');
  const saveTaskBtn = document.getElementById('saveTaskBtn');
  const taskInput = document.getElementById('taskInput');
  let selectedDate = null;

  function openTaskModal(day) {
    selectedDate = day;
    taskModal.style.display = 'flex';
  }

  closeModal.addEventListener('click', () => {
    taskModal.style.display = 'none';
  });

  saveTaskBtn.addEventListener('click', () => {
    const task = taskInput.value;
    if (task) {
      alert(`Tarea "${task}" asignada para el día ${selectedDate}`);
      taskInput.value = '';
      taskModal.style.display = 'none';
    } else {
      alert('Por favor, ingresa una tarea');
    }
  });
});

// Modal HTML
const taskModalHTML = `
  <div id="taskModal" class="modal">
    <div class="modal-content">
      <span id="closeModal" class="close">&times;</span>
      <h2>Asignar Tarea</h2>
      <input type="text" id="taskInput" placeholder="Escribe tu tarea aquí">
      <button id="saveTaskBtn">Guardar Tarea</button>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', taskModalHTML);


// Lógica para el cierre de sesión
document.getElementById('logout').addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento por defecto del enlace

  // Aquí puedes añadir lógica para cerrar la sesión, como eliminar el token de sesión
  // Ejemplo:
  // localStorage.removeItem('token'); // Si usas localStorage
  // sessionStorage.removeItem('token'); // Si usas sessionStorage

  // Redirigir a la página de inicio o de cierre de sesión
  window.location.href = '../Login.html'; // Cambia esto a la ruta de tu página de inicio de sesión
});
