document.addEventListener('DOMContentLoaded', function() {
    // Variable para almacenar tareas
    let tareas = [];

    // Función para renderizar tareas
    function renderizarTareas(filtro = 'todas') {
        const listaTareas = document.getElementById('lista-tareas');
        listaTareas.innerHTML = '';

        const tareasFiltradas = filtro === 'todas' ? tareas : 
            tareas.filter(tarea => tarea.estado === filtro);

        tareasFiltradas.forEach((tarea, index) => {
            const elementoTarea = document.createElement('div');
            elementoTarea.classList.add('tarea', tarea.estado);
            elementoTarea.innerHTML = `
                <div class="tarea-header">
                    <div>
                        <h3>${tarea.titulo}</h3>
                        <p>${tarea.descripcion}</p>
                        <small>Fecha límite: ${tarea.fechaLimite}</small>
                        <span class="prioridad ${tarea.prioridad}">
                            Prioridad: ${tarea.prioridad.toUpperCase()}
                        </span>
                    </div>
                    <div class="tarea-acciones">
                        ${tarea.estado !== 'completada' ? 
                            `<button class="btn-estado completar" data-index="${index}">
                                <i class="fas fa-check"></i>
                            </button>` : 
                            `<button class="btn-estado reactivar" data-index="${index}">
                                <i class="fas fa-undo"></i>
                            </button>`
                        }
                        <button class="btn-eliminar" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            listaTareas.appendChild(elementoTarea);
        });

        // Añadir event listeners a botones de acciones
        document.querySelectorAll('.btn-estado').forEach(boton => {
            boton.addEventListener('click', cambiarEstadoTarea);
        });

        document.querySelectorAll('.btn-eliminar').forEach(boton => {
            boton.addEventListener('click', eliminarTarea);
        });
    }

    // Función para cambiar estado de tarea
    function cambiarEstadoTarea(evento) {
        const index = evento.currentTarget.dataset.index;
        const tarea = tareas[index];

        tarea.estado = tarea.estado === 'completada' ? 'pendiente' : 'completada';
        renderizarTareas(document.getElementById('filtro-estado').value);
    }

    // Función para eliminar tarea
    function eliminarTarea(evento) {
        const index = evento.currentTarget.dataset.index;
        tareas.splice(index, 1);
        renderizarTareas(document.getElementById('filtro-estado').value);
    }

    // Configuración del modal de nueva tarea
    const modalNuevaTarea = document.getElementById('modal-nueva-tarea');
    const botonAgregarTarea = document.getElementById('agregar-tarea');
    const cerrarModal = document.querySelector('.close-modal');

    botonAgregarTarea.addEventListener('click', () => {
        modalNuevaTarea.style.display = 'block';
    });

    cerrarModal.addEventListener('click', () => {
        modalNuevaTarea.style.display = 'none';
    });

    // Evento para crear nueva tarea
    document.getElementById('form-nueva-tarea').addEventListener('submit', function(e) {
        e.preventDefault();

        const nuevaTarea = {
            titulo: document.getElementById('titulo-tarea').value,
            descripcion: document.getElementById('descripcion-tarea').value,
            prioridad: document.getElementById('prioridad-tarea').value,
            fechaLimite: document.getElementById('fecha-limite').value,
            estado: 'pendiente'
        };

        tareas.push(nuevaTarea);
        renderizarTareas(document.getElementById('filtro-estado').value);

        // Limpiar formulario y cerrar modal
        this.reset();
        modalNuevaTarea.style.display = 'none';
    });

    // Filtro de tareas
    document.getElementById('filtro-estado').addEventListener('change', function() {
        renderizarTareas(this.value);
    });

    // Inicializar con algunas tareas de ejemplo
    tareas = [
        {
            titulo: 'Reporte Mensual',
            descripcion: 'Preparar informe de ventas del mes',
            prioridad: 'alta',
            fechaLimite: '2024-01-25',
            estado: 'pendiente'
        },
        {
            titulo: 'Reunión de Equipo',
            descripcion: 'Videoconferencia de seguimiento de proyectos',
            prioridad: 'media',
            fechaLimite: '2024-01-20',
            estado: 'en-progreso'
        }
    ];

    // Renderizar tareas iniciales
    renderizarTareas();
});