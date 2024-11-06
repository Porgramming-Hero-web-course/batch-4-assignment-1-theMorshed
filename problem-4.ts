type Circle = {
    shape: string;
    radius: number;
}
type Rectangle = {
    shape: string;
    width: number;
    height: number;
}
type CircleAndRectangle = Circle | Rectangle;

function calculateShapeArea(userShape: CircleAndRectangle): void {
    if (userShape.shape === "circle") {
        const area = Math.PI * userShape.radius * userShape.radius;
        console.log(area.toFixed(2));
    }
    else if (userShape.shape == "rectangle") {
        const area = userShape.width * userShape.height;
        console.log(area);
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});