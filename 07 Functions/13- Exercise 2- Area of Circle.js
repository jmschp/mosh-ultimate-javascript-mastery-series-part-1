// 13- Exercise 2- Area of Circle.js

const circle = {
    radius: 1,
    set circleRadius(rad) {
        this.radius = rad;
    },
    get circleArea() {
        return Math.PI * this.radius ** 2;
    }
}
circle.circleRadius= 10;
console.log(circle.circleArea);

// Mosh solution

const circleMosh = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
