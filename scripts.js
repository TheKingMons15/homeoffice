document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if ((email === "admin" && password === "12345")) {
        window.location.href = "Main/indexadmin.html"; 
    } else if (email === "root" && password === "12345") {
        window.location.href = "Empleado.html"; 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
    
});
