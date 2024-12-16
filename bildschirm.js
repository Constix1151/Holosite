function adjustButtons() {
    const container = document.querySelector('.container');
    if (window.innerWidth < 768) {
        container.classList.add('small-screen');
    } else {
        container.classList.remove('small-screen');
    }
}

// Initiale Anpassung
adjustButtons();

// Event Listener für Fenstergrößenänderung
window.addEventListener('resize', adjustButtons);

// Event Listener für Button-Klicks
document.getElementById('menu-item dropdown').addEventListener('click', function() {
    alert('Menü geöffnet!');
});

document.getElementById('dropdown-btn').addEventListener('click', function() {
    alert('Item ausgewählt!');
});