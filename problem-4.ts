// Circle type declared
type Circle = {
    shape: "circle";
    radius: number;
}

// Rectangle type declared
type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

// Circle | Rectangle type declared
type CircleOrRectangle = Circle | Rectangle;

// calculateShapeArea function declaration
function calculateShapeArea(userShape: CircleOrRectangle): number {
    let area: number = 0;
    if (userShape.shape === "circle") {
        area = Math.PI * userShape.radius * userShape.radius;
    }
    else if (userShape.shape === "rectangle") {
        area = userShape.width * userShape.height;
    }
    return area;
}

// invoke function 
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// invoke function
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// print both area
console.log(circleArea);
console.log(rectangleArea);