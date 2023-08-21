// Calculates the iterations for a given point in the fractal
function calculateIterations(zx, zy, cX, cY, iter) {
    while (zx * zx + zy * zy < 4 && iter > 0) {
        var tmp = zx * zx - zy * zy + cX;
        zy = 2 * zx * zy + cY;
        zx = tmp;
        iter--;
    }
    return iter;
}