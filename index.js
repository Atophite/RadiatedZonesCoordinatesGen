const element = document.getElementById("generateButton")

element.addEventListener("click", function() {
    console.log("click")

    let points = [
        [parseFloat(document.getElementById("x1").value), parseFloat(document.getElementById("y1").value)],
        [parseFloat(document.getElementById("x2").value), parseFloat(document.getElementById("y2").value)],
        [parseFloat(document.getElementById("x3").value), parseFloat(document.getElementById("y3").value)],
        [parseFloat(document.getElementById("x4").value), parseFloat(document.getElementById("y4").value)]
    ];

    if(isNaN(points[0][0]) === true && isNaN(points[0][1])) {
        //Use coordinates box instead
        const text = document.getElementById("coordinatesBox").value
        const coordinatesArray = text.trim().split("\n");
        points = coordinatesArray.map(coordinate => {
            const [x, y] = coordinate.split("x").map(parseFloat);
            return [x, y];
        });

    }
    const result = findMinMaxXY(points);
    const resultText = `{${result.minX}, ${result.maxX}}, {${result.minY}, ${result.maxY}}`;
    document.getElementById("result").textContent = resultText;



});

function findMinMaxXY(points) {
    let minX = points[0][0];
    let maxX = points[0][0];
    let minY = points[0][1];
    let maxY = points[0][1];

    for (let i = 1; i < points.length; i++) {
        const x = points[i][0];
        const y = points[i][1];

        if (x < minX) {
            minX = x;
        }
        if (x > maxX) {
            maxX = x;
        }
        if (y < minY) {
            minY = y;
        }
        if (y > maxY) {
            maxY = y;
        }
    }

    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY
    };
}