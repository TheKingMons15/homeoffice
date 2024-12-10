const calendar = document.getElementById('calendar');
const taskModal = document.getElementById('taskModal');
const closeModal = document.getElementById('closeModal');
const saveTaskBtn = document.getElementById('saveTaskBtn');
const taskInput = document.getElementById('taskInput');
let selectedDate = null;

function generateCalendar() {
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  calendar.innerHTML = '';

  daysOfWeek.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    calendar.appendChild(dayElement);
  });
  
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyElement = document.createElement('div');
    calendar.appendChild(emptyElement);
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = i;
    dayElement.addEventListener('click', () => openTaskModal(i));
    calendar.appendChild(dayElement);
  }
}

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

generateCalendar();
