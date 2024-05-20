function Time(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;

  // Функція для виведення часу на екран
  this.displayTime = function () {
    const formattedHours = String(this.hours).padStart(2, '0');
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    const formattedSeconds = String(this.seconds).padStart(2, '0');
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  };

  // Функція для зміни часу на передану кількість секунд
  this.addSeconds = function (seconds) {
    this.seconds += seconds;

    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }

    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  };

  // Функція для зміни часу на передану кількість хвилин
  this.addMinutes = function (minutes) {
    this.minutes += minutes;

    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  };

  // Функція для зміни часу на передану кількість годин
  this.addHours = function (hours) {
    this.hours += hours;

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  };
}

// Створення об'єкта time за допомогою функції-конструктора
const time = new Time(20, 59, 45);

// Виклик методів об'єкта time
time.displayTime();
time.addSeconds(30);
time.displayTime();
time.addMinutes(80);
time.displayTime();
time.addHours(5);
time.displayTime();
