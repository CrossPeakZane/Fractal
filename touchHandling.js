var initialTouchX, initialTouchY;

function setupTouchHandling() {
    canvas.addEventListener('touchstart', function(e) {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        initialTouchX = touch.clientX - rect.left;
        initialTouchY = touch.clientY - rect.top;
        handleTouchStart(initialTouchX, initialTouchY);
    });
}

function handleTouchStart(x, y) {
    highlightTouchPoint(x, y);
    startZooming(x, y);
}

function handleTouchEnd(event) {
    currentZoom = 1;
}
