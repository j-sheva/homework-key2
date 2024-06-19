class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      throw new Error('Radius must be positive');
    }
  }

  get diameter() {
    return this._radius * 2;
  }

  area() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(5);
console.log(`Радіус кола: ${circle.radius}`);
console.log(`Діаметр кола: ${circle.diameter}`);
console.log(`Площа кола: ${circle.area()}`);
console.log(`Довжина кола: ${circle.circumference()}`);

circle.radius = 10;
console.log(`Новий радіус кола: ${circle.radius}`);
console.log(`Новий діаметр кола: ${circle.diameter}`);
console.log(`Нова площа кола: ${circle.area()}`);
console.log(`Нова довжина кола: ${circle.circumference()}`);
