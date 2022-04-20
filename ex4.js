function Circle(radius) {
  this.radius = radius;
  this.calculatePerimeter = () => 2 * Math.PI * radius;
  this.calculateArea = () => Math.PI * radius ** 2;
}
let myCircle = new Circle(5);
console.log(myCircle.calculatePerimeter());
console.log(myCircle.calculateArea());
