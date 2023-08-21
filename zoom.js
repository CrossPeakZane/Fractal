window.offsetX = 0;
window.offsetY = 0;
window.currentZoom = 1;
var zoomEnded = false;

function zoom(x, y, scale) {
    var width = canvas.width;
    var height = canvas.height;

    window.offsetX = ((x / (0.5 * scale * width) - window.offsetX) * window.currentZoom) * 1.5;
    window.offsetY = ((y / (0.5 * scale * height) - window.offsetY) * window.currentZoom);
}




function zoomAnimation() {
    if (zoomEnded) {
        return;
    }
    drawFractal();
    currentZoom *= 1.1;
    if (currentZoom > 100) {
        currentZoom = 1;
        zoomEnded = true;
    } else {
        requestAnimationFrame(zoomAnimation);
    }
}

function startZooming(x, y) {
    zoomEnded = false;
    zoom(x, y, 2);
    zoomAnimation();
}

function getZoomLevel() {
    return currentZoom;
}
