const car = {
  manufacturer: 'Audi',
  model: 'A4',
  year: 2022,
  averageSpeed: 100,
  fuelVolume: 40,
  fuelConsumption: 10,
  drivers: ['Іван'],

  // Метод для виведення інформації про автомобіль
  displayInfo: function () {
    console.log(`Виробник: ${this.manufacturer}`);
    console.log(`Модель: ${this.model}`);
    console.log(`Рік випуску: ${this.year}`);
    console.log(`Середня швидкість: ${this.averageSpeed} км/год`);
    console.log(`Обсяг паливного баку: ${this.fuelVolume} л`);
    console.log(`Середня витрата палива: ${this.fuelConsumption} л на 100 км`);
    console.log(`Водії: ${Object.values(this.drivers)}`);
  },

  // Метод для додавання імені водія у список
  addDriver(driverName) {
    if (!this.drivers.includes(driverName)) {
      this.drivers.push(driverName);
      console.log(`${driverName} доданий до списку водіїв.`);
    } else {
      console.log(`${driverName} вже є у списку водіїв.`);
    }
  },

  // Метод для перевірки наявності водія у списку
  checkDriver(driverName) {
    if (this.drivers.includes(driverName)) {
      console.log(`${driverName} є у списку водіїв.`);
    } else {
      console.log(`${driverName} немає у списку водіїв.`);
    }
  },

  // Метод для підрахунку необхідного часу та кількості палива для подолання відстані
  calculateTrip(distance) {
    const drivingTime = distance / this.averageSpeed;
    const restTime = Math.floor(drivingTime / 4);
    const totalTime = drivingTime + restTime;
    const fuelNeeded = (distance / 100) * this.fuelConsumption;

    console.log(`Для подолання ${distance} км потрібно:`);
    console.log(
      `Час: ${totalTime.toFixed(2)} годин (включаючи ${restTime} годин перерв)`
    );
    console.log(`Паливо: ${fuelNeeded.toFixed(2)} літрів`);
  },
};

car.displayInfo();
car.addDriver('Іван');
car.addDriver('Петро');
car.checkDriver('Іван');
car.checkDriver('Олег');
car.calculateTrip(450);
