document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Stops the browser from reloading or changing the URL
    // Redirect to your target page
    window.location.href = 'index.html';
});