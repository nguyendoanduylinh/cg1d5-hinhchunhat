let inputHeight = parseInt(prompt("Please input height"));
let inputWidth = parseInt(prompt("Please input width"));

let newRectangle = new Rectangle(inputHeight, inputWidth);

let resultArea = newRectangle.getArea(inputHeight, inputWidth);
alert(`Area of rectangle is ${resultArea}`);

let resultPerimeter = newRectangle.getPerimeter(inputHeight, inputWidth);
alert(`Perimeter of rectangle is ${resultPerimeter}`);
