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

// Datos simulados actualizados
const empleados = [
    { 
        id: 1, 
        nombre: "Jimmy Montenegro", 
        rol: "Desarrollador",
        cedula: "1723456789",
        celular: "0987654321"
    },
    { 
        id: 2, 
        nombre: "Estefania Ipiales", 
        rol: "Desarrolladora",
        cedula: "1734567890",
        celular: "0998765432"
    },
    { 
        id: 3, 
        nombre: "Wladimir Chalacna", 
        rol: "Líder de Proyecto",
        cedula: "1745678901",
        celular: "0976543210"
    }
];

// Mantener las otras estructuras de datos sin cambios
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

// Función mejorada para cargar gestión de empleados
function cargarGestionEmpleados() {
    const empleadosHTML = empleados.map(emp => `
        <tr>
            <td>${emp.nombre}</td>
            <td>${emp.rol}</td>
            <td>${emp.cedula}</td>
            <td>${emp.celular}</td>
            <td>
                <div class="acciones-container">
                    <button class="btn-accion editar" onclick="editarEmpleado(${emp.id})">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="btn-accion eliminar" onclick="eliminarEmpleado(${emp.id})">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    mainContent.innerHTML = `
        <div class="gestion-empleados-container">
            <div class="header-container">
                <h1>Gestión de Empleados</h1>
                <button class="btn-nuevo-empleado" onclick="agregarEmpleado()">
                    <i class="fas fa-user-plus"></i> Nuevo Empleado
                </button>
            </div>
            
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Cédula</th>
                            <th>Celular</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>${empleadosHTML}</tbody>
                </table>
            </div>
        </div>
    `;
}

// Funciones de gestión
function editarEmpleado(id) {
    const empleado = empleados.find(emp => emp.id === id);
    if (!empleado) return;

    const nuevosDatos = {
        nombre: prompt("Nombre:", empleado.nombre),
        rol: prompt("Rol:", empleado.rol),
        cedula: prompt("Cédula:", empleado.cedula),
        celular: prompt("Celular:", empleado.celular)
    };

    if (nuevosDatos.nombre && nuevosDatos.rol && nuevosDatos.cedula && nuevosDatos.celular) {
        Object.assign(empleado, nuevosDatos);
        cargarGestionEmpleados();
    }
}

function eliminarEmpleado(id) {
    if (confirm("¿Está seguro que desea eliminar este empleado?")) {
        const index = empleados.findIndex(emp => emp.id === id);
        if (index !== -1) {
            empleados.splice(index, 1);
            cargarGestionEmpleados();
        }
    }
}

function agregarEmpleado() {
    const nuevoEmpleado = {
        id: empleados.length + 1,
        nombre: prompt("Ingrese el nombre del empleado:"),
        rol: prompt("Ingrese el rol del empleado:"),
        cedula: prompt("Ingrese el número de cédula:"),
        celular: prompt("Ingrese el número de celular:")
    };

    if (nuevoEmpleado.nombre && nuevoEmpleado.rol && nuevoEmpleado.cedula && nuevoEmpleado.celular) {
        empleados.push(nuevoEmpleado);
        cargarGestionEmpleados();
    }
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

class GestionReuniones {
    constructor() {
        this.reuniones = JSON.parse(localStorage.getItem('reuniones')) || [];
        this.user = JSON.parse(sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser'));
        this.inicializarEventos();
    }

    inicializarEventos() {
        const reunionesLink = document.getElementById('Gestion_reuniones');
        if (reunionesLink) {
            reunionesLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.mostrarInterfaz();
            });
        }
    }

    mostrarInterfaz() {
        // Verificar autenticación
        if (!this.user) {
            console.error("Usuario no autenticado");
            window.location.href = '/Login.html';
            return;
        }

        const mainContent = document.getElementById('main-content');
        if (!mainContent) {
            console.error("Elemento main-content no encontrado");
            return;
        }

        mainContent.innerHTML = `
            <h2>Gestión de Reuniones Virtuales</h2>
            <div class="reunion-form">
                <div class="form-group">
                    <label for="tituloReunion">Título de la reunión:</label>
                    <input type="text" id="tituloReunion" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="fechaReunion">Fecha y hora:</label>
                    <input type="datetime-local" id="fechaReunion" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="participantesReunion">Participantes (separados por coma):</label>
                    <input type="text" id="participantesReunion" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="enlaceReunion">Enlace de la reunión:</label>
                    <input type="text" id="enlaceReunion" class="form-control" required>
                </div>
                <button onclick="gestionReuniones.agregarReunion()" class="btn btn-primary">
                    Programar Reunión
                </button>
            </div>
            <div id="listaReuniones" class="lista-reuniones mt-4">
                <h3>Reuniones Programadas</h3>
                <div id="reunionesContainer"></div>
            </div>
        `;

        this.actualizarListaReuniones();
    }

    agregarReunion() {
        if (!this.user) {
            alert('Debe iniciar sesión para programar reuniones');
            return;
        }

        const titulo = document.getElementById('tituloReunion').value.trim();
        const fecha = document.getElementById('fechaReunion').value;
        const participantes = document.getElementById('participantesReunion').value
            .split(',')
            .map(p => p.trim())
            .filter(p => p);
        const enlace = document.getElementById('enlaceReunion').value.trim();

        if (!titulo || !fecha || !participantes.length || !enlace) {
            alert('Por favor, complete todos los campos correctamente');
            return;
        }

        const nuevaReunion = {
            id: Date.now(),
            titulo,
            fecha,
            participantes,
            enlace,
            organizador: this.user.username,
            createdAt: new Date().toISOString()
        };

        try {
            this.reuniones.push(nuevaReunion);
            this.guardarReuniones();
            this.actualizarListaReuniones();
            this.limpiarFormulario();
            alert('Reunión programada exitosamente');
        } catch (error) {
            console.error('Error al guardar la reunión:', error);
            alert('Error al programar la reunión. Por favor, intente nuevamente.');
        }
    }

    eliminarReunion(id) {
        if (!this.user) {
            alert('Debe iniciar sesión para eliminar reuniones');
            return;
        }

        const reunion = this.reuniones.find(r => r.id === id);
        if (!reunion) {
            alert('Reunión no encontrada');
            return;
        }

        // Solo el organizador o un admin puede eliminar la reunión
        if (reunion.organizador !== this.user.username && this.user.role !== 'admin') {
            alert('No tiene permisos para eliminar esta reunión');
            return;
        }

        if (confirm('¿Está seguro de que desea eliminar esta reunión?')) {
            this.reuniones = this.reuniones.filter(reunion => reunion.id !== id);
            this.guardarReuniones();
            this.actualizarListaReuniones();
        }
    }

    actualizarListaReuniones() {
        const container = document.getElementById('reunionesContainer');
        if (!container) return;

        container.innerHTML = '';

        if (this.reuniones.length === 0) {
            container.innerHTML = '<p class="text-muted">No hay reuniones programadas</p>';
            return;
        }

        this.reuniones
            .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
            .forEach(reunion => {
                const reunionElement = document.createElement('div');
                reunionElement.className = 'card mb-3 reunion-item';
                
                const fechaReunion = new Date(reunion.fecha);
                const esReunionPasada = fechaReunion < new Date();
                
                reunionElement.innerHTML = `
                    <div class="card-body">
                        <h4 class="card-title">${reunion.titulo}</h4>
                        <p class="card-text">
                            <strong>Fecha:</strong> ${fechaReunion.toLocaleString()}<br>
                            <strong>Estado:</strong> <span class="badge ${esReunionPasada ? 'bg-secondary' : 'bg-primary'}">
                                ${esReunionPasada ? 'Finalizada' : 'Programada'}
                            </span><br>
                            <strong>Organizador:</strong> ${reunion.organizador}<br>
                            <strong>Participantes:</strong> ${reunion.participantes.join(', ')}<br>
                            <strong>Enlace:</strong> <a href="${reunion.enlace}" target="_blank" class="link-primary">
                                ${reunion.enlace}
                            </a>
                        </p>
                        ${!esReunionPasada ? `
                            <button onclick="gestionReuniones.eliminarReunion(${reunion.id})" 
                                    class="btn btn-danger btn-sm">
                                Eliminar
                            </button>
                        ` : ''}
                    </div>
                `;
                container.appendChild(reunionElement);
            });
    }

    guardarReuniones() {
        try {
            localStorage.setItem('reuniones', JSON.stringify(this.reuniones));
        } catch (error) {
            console.error('Error al guardar las reuniones:', error);
            alert('Error al guardar los cambios. Por favor, intente nuevamente.');
        }
    }

    limpiarFormulario() {
        const campos = ['tituloReunion', 'fechaReunion', 'participantesReunion', 'enlaceReunion'];
        campos.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) elemento.value = '';
        });
    }
}

// Inicializar la gestión de reuniones cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    window.gestionReuniones = new GestionReuniones();
});