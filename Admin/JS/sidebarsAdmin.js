/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

document.getElementById('inventario').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  document.getElementById('main-content').innerHTML = `
      <h1>Inventario</h1>
      <p>Aquí puedes gestionar tu inventario de productos.</p>
      <p>Agrega, edita o elimina artículos según sea necesario.</p>
  `;
});

// Añade más eventos para las otras secciones si es necesario
document.getElementById('distribucion').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('main-content').innerHTML = `
      <h1>Distribución</h1>
      <p>Aquí puedes gestionar la distribución de tus productos.</p>
  `;
});

document.getElementById('facturas').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('main-content').innerHTML = `
      <h1>Facturas</h1>
      <p>Aquí puedes ver y gestionar tus facturas.</p>
  `;
});



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
