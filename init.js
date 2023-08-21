var canvas;
var ctx;

window.onload = function() {
    canvas = document.getElementById('fractalCanvas');
    ctx = canvas.getContext('2d');
    drawFractal();
    setupTouchHandling();
    setupMouseHandling()
};

function setupMouseHandling() {
    canvas.addEventListener('mousedown', handleMouseDown);
}

function handleMouseDown(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    startZooming(x, y);
}
