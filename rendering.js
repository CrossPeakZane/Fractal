function drawFractal() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    
    for(var y = 0; y < canvas.height; y++) {
        for(var x = 0; x < canvas.width; x++) {
            var [zx, zy] = [window.offsetX + (x - canvas.width / 2) / (0.5 * canvas.width * canvas.width) * window.currentZoom,
             window.offsetY + (y - canvas.height / 2) / (0.5 * canvas.height * canvas.height) * window.currentZoom];





            var [cX, cY] = [zx, zy];
            var iter = calculateIterations(zx, zy, cX, cY, 255);

            var index = (y * canvas.width + x) * 4;
            var color = iter % 256;
            data[index] = color;             
            data[index + 1] = color << 1;
            data[index + 2] = color << 2;   
            data[index + 3] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);
}

function highlightTouchPoint(x, y) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();  
}
