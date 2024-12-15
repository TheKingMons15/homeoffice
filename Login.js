// Definición de usuarios
const usuarios = [
    {
        email: "wladimir@email.com",
        password: "12345",
        role: "admin",
        redirect: "../Admin/admin.html"
    },
    {
        email: "jimmy@email.com",
        password: "12345",
        role: "empleado",
        redirect: "../Empleado/Empleado.html"
    },
    {
        email: "estefania@email.com",
        password: "12345",
        role: "empleado",
        redirect: "../Empleado/Empleado.html"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    // Función para mostrar mensajes de error
    function showError(message) {
        let errorDiv = document.getElementById('error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-message';
            errorDiv.style.color = 'red';
            errorDiv.style.marginBottom = '10px';
            errorDiv.style.textAlign = 'center';
            const form = document.querySelector('.login-box');
            form.insertBefore(errorDiv, form.querySelector('button'));
        }
        errorDiv.textContent = message;
    }

    // Manejar el envío del formulario de login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value.toLowerCase();
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            console.log('Intento de login:', { email, password }); // Para depuración

            // Buscar usuario
            const usuario = usuarios.find(u => u.email === email && u.password === password);

            if (usuario) {
                // Guardar información del usuario
                const userData = {
                    email: usuario.email,
                    role: usuario.role
                };

                if (rememberMe) {
                    localStorage.setItem('currentUser', JSON.stringify(userData));
                } else {
                    sessionStorage.setItem('currentUser', JSON.stringify(userData));
                }

                console.log('Usuario encontrado, redirigiendo a:', usuario.redirect); // Para depuración
                window.location.href = usuario.redirect;
            } else {
                console.log('Usuario no encontrado'); // Para depuración
                showError("Email o contraseña incorrectos");
            }
        });
    }

    // Event listeners para enlaces adicionales
    const forgotPassword = document.getElementById('forgotPassword');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Función de recuperación de contraseña en desarrollo');
        });
    }

    const registerButton = document.getElementById('registerButton');
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            alert('Función de registro en desarrollo');
        });
    }
});