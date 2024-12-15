document.addEventListener('DOMContentLoaded', function () {
    // Función para inicializar el chat
    function initializeChat() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div id="chat-container">
                <div id="chat-header">
                    <img src="/Img/wladimir.jpg" alt="Perfil" class="profile-image">
                    <div class="chat-info">
                        <h3>Lider Proyecto</h3>
                        <p class="status">En línea</p>
                    </div>
                </div>
                
                <div id="chat-messages">
                    <!-- Mensajes se insertarán dinámicamente aquí -->
                </div>
                
                <div id="chat-input">
                    <input type="text" id="message-input" placeholder="Escribe un mensaje...">
                    <button id="send-message">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;

        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-message');
        const chatMessages = document.getElementById('chat-messages');

        // Mensajes predefinidos para simular un chat
        const predefinedMessages = [
            { text: "Hola, ¿cómo estás?", type: 'received' },
            { text: "Necesito información sobre el proyecto.", type: 'received' }
        ];

        // Función para renderizar mensajes
        function renderMessages() {
            chatMessages.innerHTML = ''; // Limpiar mensajes anteriores
            predefinedMessages.forEach(msg => {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', msg.type);
                messageElement.textContent = msg.text;
                chatMessages.appendChild(messageElement);
            });

            // Hacer scroll al último mensaje
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Función para enviar mensaje
        function sendMessage() {
            const messageText = messageInput.value.trim();
            if (messageText) {
                predefinedMessages.push({ 
                    text: messageText, 
                    type: 'sent' 
                });
                
                // Simular respuesta automática
                setTimeout(() => {
                    predefinedMessages.push({ 
                        text: "Gracias por tu mensaje. Lo revisaré pronto.", 
                        type: 'received' 
                    });
                    renderMessages();
                }, 1000);

                renderMessages();
                messageInput.value = ''; // Limpiar el input después de enviar el mensaje
            }
        }

        // Event Listeners
        sendButton.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Renderizar mensajes iniciales
        renderMessages();
    }

    // Evento para cargar el chat desde el sidebar
    const mensajesBtn = document.getElementById('mensajes');
    if (mensajesBtn) {
        mensajesBtn.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Cargando el chat...");
            initializeChat();
        });
    } else {
        console.error("El botón 'mensajes' no se encuentra en el DOM.");
    }
});
