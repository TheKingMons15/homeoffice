// Función para verificar autenticación
function checkAuth() {
    const user = JSON.parse(sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser'));
    return user;
}

// Carga inicial del DOM
document.addEventListener('DOMContentLoaded', function () {
    console.log("Página del administrador cargada, inicializando...");

    // Verificar autenticación del usuario
    const user = checkAuth();
    if (!user || user.role !== 'admin') {
        console.error("Usuario no autenticado o rol no válido. Redirigiendo a login...");
        window.location.href = '/Login.html';
        return;
    }

    console.log("Usuario autenticado:", user);

    const mainContent = document.getElementById('main-content');

    // Datos simulados
    const empleados = [
        { id: 1, nombre: "Jimmy Montenegro", rol: "Desarrollador" },
        { id: 2, nombre: "Estefania Ipiales", rol: "Desarrolladora" },
        { id: 3, nombre: "Wladimir Chalacna", rol: "Líder de Proyecto" }
    ];

    const tareas = [
        { titulo: "Diseñar la base de datos", estado: "Completada", asignado: "Jimmy" },
        { titulo: "Desarrollar el backend", estado: "En Progreso", asignado: "Estefania" },
        { titulo: "Pruebas finales", estado: "Pendiente", asignado: "Jimmy" }
    ];

    const equipos = [
        { nombre: "Equipo Backend", miembros: ["Jimmy", "Estefania"] },
        { nombre: "Equipo QA", miembros: ["Wladimir"] }
    ];

    const asistencias = [
        { empleado: "Jimmy Montenegro", dias: ["2024-12-01", "2024-12-02"], horas: ["8h", "7h"] },
        { empleado: "Estefania Ipiales", dias: ["2024-12-01"], horas: ["9h"] }
    ];

    const mensajes = [
        { remitente: "Wladimir", mensaje: "¿Cómo va el desarrollo?", tipo: "enviado" },
        { remitente: "Jimmy", mensaje: "En progreso, terminando el backend.", tipo: "recibido" }
    ];

    // Funciones para cargar contenido
    function cargarGestionEmpleados() {
        const empleadosHTML = empleados.map(emp => `
            <tr>
                <td>${emp.nombre}</td>
                <td>${emp.rol}</td>
                <td><button class="btn-accion" onclick="editarRol(${emp.id})">Editar Rol</button></td>
            </tr>
        `).join('');
        mainContent.innerHTML = `
            <h1>Gestión de Empleados</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>${empleadosHTML}</tbody>
            </table>
        `;
    }

    function cargarGestionTareas() {
        const tareasHTML = tareas.map(t => `
            <tr>
                <td>${t.titulo}</td>
                <td>${t.estado}</td>
                <td>${t.asignado}</td>
            </tr>
        `).join('');
        mainContent.innerHTML = `
            <h1>Gestión de Tareas</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Estado</th>
                        <th>Asignado a</th>
                    </tr>
                </thead>
                <tbody>${tareasHTML}</tbody>
            </table>
        `;
    }

    function cargarGestionProyectos() {
        const equiposHTML = equipos.map(eq => `
            <tr>
                <td>${eq.nombre}</td>
                <td>${eq.miembros.join(", ")}</td>
            </tr>
        `).join('');
        mainContent.innerHTML = `
            <h1>Gestión de Equipos</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Equipo</th>
                        <th>Miembros</th>
                    </tr>
                </thead>
                <tbody>${equiposHTML}</tbody>
            </table>
        `;
    }

    function cargarGestionMensajes() {
        const mensajesHTML = mensajes.map(msg => `
            <div class="mensaje ${msg.tipo}">
                <p><strong>${msg.remitente}:</strong> ${msg.mensaje}</p>
            </div>
        `).join('');
        mainContent.innerHTML = `
            <h1>Gestión de Mensajes</h1>
            <div class="chat">
                ${mensajesHTML}
                <div class="chat-input">
                    <input type="text" id="mensaje-nuevo" placeholder="Escribe un mensaje...">
                    <button class="btn-accion" onclick="enviarMensaje()">Enviar</button>
                </div>
            </div>
        `;
    }

    function cargarGestionAsistencias() {
        const asistenciasHTML = asistencias.map(asis => `
            <tr>
                <td>${asis.empleado}</td>
                <td>${asis.dias.join(", ")}</td>
                <td>${asis.horas.join(", ")}</td>
            </tr>
        `).join('');
        mainContent.innerHTML = `
            <h1>Gestión de Asistencias</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Empleado</th>
                        <th>Días Trabajados</th>
                        <th>Horas Trabajadas</th>
                    </tr>
                </thead>
                <tbody>${asistenciasHTML}</tbody>
            </table>
        `;
    }

    // Asignar eventos a los botones del menú
    document.getElementById('Gestion_empleados').addEventListener('click', cargarGestionEmpleados);
    document.getElementById('Gestion_tareas').addEventListener('click', cargarGestionTareas);
    document.getElementById('Gestion_proyectos').addEventListener('click', cargarGestionProyectos);
    document.getElementById('Gestion_mesajes').addEventListener('click', cargarGestionMensajes);
    document.getElementById('Gestion_asistencias').addEventListener('click', cargarGestionAsistencias);

    // Funciones globales
    window.editarRol = function (id) {
        const empleado = empleados.find(emp => emp.id === id);
        if (empleado) {
            const nuevoRol = prompt(`Editar rol para ${empleado.nombre}:`, empleado.rol);
            if (nuevoRol) {
                empleado.rol = nuevoRol;
                cargarGestionEmpleados();
            }
        }
    };

    window.enviarMensaje = function () {
        const input = document.getElementById('mensaje-nuevo');
        if (input.value.trim()) {
            mensajes.push({ remitente: "Admin", mensaje: input.value.trim(), tipo: "enviado" });
            cargarGestionMensajes();
        }
    };
});
