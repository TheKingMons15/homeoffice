// Función para verificar autenticación
function checkAuth() {
  const user = JSON.parse(sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser'));
  return user;
}

// Carga inicial del DOM
document.addEventListener('DOMContentLoaded', function () {
  console.log("Página cargada, inicializando...");
  
  // Verificar autenticación del usuario
  const user = checkAuth();
  if (!user || user.role !== 'empleado') {
      console.error("Usuario no autenticado o rol no válido. Redirigiendo a login...");
      window.location.href = '/Login.html';
      return;
  }

  console.log("Usuario autenticado:", user);

  // Variables globales
  const mainContent = document.getElementById('main-content');
  const mensajesBtn = document.getElementById('mensajes');
  const tareasBtn = document.getElementById('tareas');
  const proyectosBtn = document.getElementById('proyectos');
  const equipoBtn = document.getElementById('equipo');
  const calendarioBtn = document.getElementById('calendario');
  const logoutBtn = document.getElementById('logout');

  // Mostrar saludo personalizado en la página principal
  mainContent.innerHTML = `
      <div class="welcome-message">
          <h1>¡Bienvenido, ${user.nombre}!</h1>
          <p>Estamos encantados de tenerte aquí. Selecciona una opción del menú para comenzar.</p>
      </div>
  `;

  // Validar que los elementos existen antes de asignar eventos
  if (mensajesBtn) {
      mensajesBtn.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("Clic en Mensajes");
          mainContent.innerHTML = '<p>Sección de Mensajes en construcción...</p>';
      });
  } else {
      console.error("Elemento 'mensajes' no encontrado.");
  }

  if (tareasBtn) {
      tareasBtn.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("Clic en Tareas");
          cargarTareas();
      });
  } else {
      console.error("Elemento 'tareas' no encontrado.");
  }

  if (proyectosBtn) {
      proyectosBtn.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("Clic en Proyectos");
          cargarProyectos();
      });
  } else {
      console.error("Elemento 'proyectos' no encontrado.");
  }

  if (equipoBtn) {
      equipoBtn.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("Clic en Equipo");
          cargarEquipo();
      });
  } else {
      console.error("Elemento 'equipo' no encontrado.");
  }

  if (calendarioBtn) {
      calendarioBtn.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("Clic en Calendario");
          cargarCalendario();
      });
  } else {
      console.error("Elemento 'calendario' no encontrado.");
  }

  if (logoutBtn) {
      logoutBtn.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("Clic en Logout");
          sessionStorage.removeItem('currentUser');
          localStorage.removeItem('currentUser');
          window.location.href = '/Login.html';
      });
  } else {
      console.error("Elemento 'logout' no encontrado.");
  }
});

// Función para cargar proyectos
function cargarProyectos() {
  document.getElementById('main-content').innerHTML = `
      <div id="proyectos-container">
          <div class="proyectos-header">
              <h1>Gestión de Proyectos</h1>
              <button id="nuevo-proyecto" class="btn-nuevo">
                  <i class="fas fa-plus"></i> Nuevo Proyecto
              </button>
          </div>
          
          <div class="dashboard-stats">
              <div class="stat-card">
                  <i class="fas fa-tasks"></i>
                  <h3>Proyectos Activos</h3>
                  <p id="proyectos-activos">3</p>
              </div>
              <div class="stat-card">
                  <i class="fas fa-clock"></i>
                  <h3>En Progreso</h3>
                  <p id="proyectos-progreso">2</p>
              </div>
              <div class="stat-card">
                  <i class="fas fa-check-circle"></i>
                  <h3>Completados</h3>
                  <p id="proyectos-completados">1</p>
              </div>
          </div>

          <div class="lista-proyectos">
              <div class="proyecto-card">
                  <h3>Proyecto Website</h3>
                  <p>Desarrollo del nuevo sitio web corporativo</p>
                  <div class="proyecto-info">
                      <span class="estado">En Progreso</span>
                      <span class="fecha">Fecha límite: 31/12/2024</span>
                  </div>
              </div>
          </div>
      </div>
  `;
}
// Función para cargar equipo
function cargarEquipo() {
  document.getElementById('main-content').innerHTML = `
      <div id="equipo-container">
          <h1>Equipo de Trabajo</h1>
          <div class="miembros-grid">
              <div class="miembro-card">
                  <img src="/Img/wladimir.jpg" alt="Líder del Equipo" class="miembro-foto">
                  <h3>Wladimir Chalacán</h3>
                  <p>Líder del Equipo</p>
                  <div class="miembro-stats">
                      <span><i class="fas fa-tasks"></i> 8 tareas</span>
                      <span><i class="fas fa-project-diagram"></i> 4 proyectos</span>
                  </div>
              </div>

              <div class="miembro-card">
                  <img src="/Img/User.jpg" alt="Desarrollador" class="miembro-foto">
                  <h3>Jimmy Montenegro</h3>
                  <p>Desarrollador</p>
                  <div class="miembro-stats">
                      <span><i class="fas fa-tasks"></i> 6 tareas</span>
                      <span><i class="fas fa-project-diagram"></i> 3 proyectos</span>
                  </div>
              </div>

              <div class="miembro-card">
                  <img src="/Img/User.jpg" alt="Desarrolladora" class="miembro-foto">
                  <h3>Estefania Ipiales</h3>
                  <p>Desarrolladora</p>
                  <div class="miembro-stats">
                      <span><i class="fas fa-tasks"></i> 4 tareas</span>
                      <span><i class="fas fa-project-diagram"></i> 2 proyectos</span>
                  </div>
              </div>
          </div>
      </div>
  `;
}

// Función para cargar calendario con línea de tiempo
function cargarCalendario() {
  console.log("Cargando sección Calendario...");

  // Simulación de tareas para mostrar en la línea de tiempo
  const tareas = [
      { titulo: "Planificación del Proyecto", inicio: "2024-12-01", fin: "2024-12-05", estado: "Completado" },
      { titulo: "Diseño del Sistema", inicio: "2024-12-06", fin: "2024-12-10", estado: "En Progreso" },
      { titulo: "Desarrollo del Backend", inicio: "2024-12-11", fin: "2024-12-20", estado: "Pendiente" },
      { titulo: "Pruebas de Integración", inicio: "2024-12-21", fin: "2024-12-25", estado: "Pendiente" },
  ];

  // Renderizar contenido en el main-content
  document.getElementById('main-content').innerHTML = `
      <div id="calendario-container">
          <h1>Línea de Tiempo del Proyecto</h1>
          <div id="timeline-container" class="timeline">
              ${tareas.map(tarea => renderTarea(tarea)).join("")}
          </div>
          <div class="legend">
              <span class="legend-item completado">Completado</span>
              <span class="legend-item en-progreso">En Progreso</span>
              <span class="legend-item pendiente">Pendiente</span>
          </div>
      </div>
  `;

  // Función para renderizar una tarea como un evento en la línea de tiempo
  function renderTarea(tarea) {
      const diasInicio = calcularDias(tarea.inicio);
      const duracionDias = calcularDuracion(tarea.inicio, tarea.fin);
      return `
          <div class="tarea" style="left: ${diasInicio}px; width: ${duracionDias}px" data-estado="${tarea.estado.toLowerCase()}">
              <span class="titulo">${tarea.titulo}</span>
              <span class="rango-fechas">${tarea.inicio} - ${tarea.fin}</span>
          </div>
      `;
  }

  // Función para calcular la posición en días desde el inicio del calendario
  function calcularDias(fecha) {
      const inicioCalendario = new Date("2024-12-01"); // Fecha de inicio del proyecto
      const fechaTarea = new Date(fecha);
      return Math.round((fechaTarea - inicioCalendario) / (1000 * 60 * 60 * 24)) * 20; // Escala de 20px por día
  }

  // Función para calcular la duración de una tarea en días
  function calcularDuracion(inicio, fin) {
      const fechaInicio = new Date(inicio);
      const fechaFin = new Date(fin);
      return Math.round((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)) * 20; // Escala de 20px por día
  }
}



function cargarTareas() {
  document.getElementById('main-content').innerHTML = `
      <div id="tareas-container">
          <div class="tareas-header">
              <h1>Gestión de Tareas</h1>
              <button id="agregar-tarea" class="btn-nuevo">
                  <i class="fas fa-plus"></i> Nueva Tarea
              </button>
          </div>
          
          <div class="filtros">
              <select id="filtro-estado" class="form-select">
                  <option value="todas">Todas las tareas</option>
                  <option value="pendiente">Pendientes</option>
                  <option value="en-progreso">En Progreso</option>
                  <option value="completada">Completadas</option>
              </select>
          </div>

          <div id="lista-tareas" class="lista-tareas">
              <!-- Las tareas se renderizarán aquí -->
          </div>
      </div>
  `;

  // Inicializar el gestor de tareas
  initializeTareas();
}

function initializeTareas() {
  // Ejemplo de datos de tareas
  const tareas = [
      { titulo: "Diseñar la base de datos", inicio: "2024-12-01", fin: "2024-12-05", estado: "Completada" },
      { titulo: "Desarrollar el backend", inicio: "2024-12-06", fin: "2024-12-10", estado: "En Progreso" },
      { titulo: "Pruebas finales", inicio: "2024-12-11", fin: "2024-12-15", estado: "Pendiente" }
  ];

  const listaTareas = document.getElementById('lista-tareas');

  // Renderiza las tareas en la lista
  listaTareas.innerHTML = tareas.map(renderTarea).join('');
}

// Función para renderizar una tarea con fechas
function renderTarea(tarea) {
  return `
      <div class="tarea" data-estado="${tarea.estado.toLowerCase()}">
          <div class="titulo">${tarea.titulo}</div>
          <div class="fecha-container">
              <div class="fecha">${tarea.inicio}</div>
              <div class="fecha">${tarea.fin}</div>
          </div>
      </div>
  `;
}
