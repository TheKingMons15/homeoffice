// Función para verificar autenticación
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = '/Login.html';
        return null;
    }
    return JSON.parse(currentUser);
}

// Función para cerrar sesión
function logout() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    window.location.href = '/Login.html';
}