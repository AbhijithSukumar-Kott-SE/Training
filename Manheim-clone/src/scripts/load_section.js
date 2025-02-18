function loadSection(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error loading the page:', error));
}

 // Load home.html when the page loads
window.onload = function() {
loadSection('./pages/home/home.html');
};