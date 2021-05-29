//Factory functions
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw');
        }
    }
}
const circle1 = createCircle(5);
const circle2 = createCircle(10);
console.log(circle1);
console.log(circle2);

//Constructor functions
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
}
const circle3 = new Circle(15);
const circle4 = new Circle(20);
console.log(circle3);
console.log(circle4);


