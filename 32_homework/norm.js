const time = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  // Функція для виведення часу на екран
  displayTime() {
    const formattedHours = String(this.hours).padStart(2, '0');
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    const formattedSeconds = String(this.seconds).padStart(2, '0');
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  },

  // Функція для зміни часу на передану кількість секунд
  addSeconds(seconds) {
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
  },

  // Функція для зміни часу на передану кількість хвилин
  addMinutes(minutes) {
    this.minutes += minutes;

    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  },

  // Функція для зміни часу на передану кількість годин
  addHours(hours) {
    this.hours += hours;

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  },
};

time.displayTime();
time.addSeconds(30);
time.displayTime();
time.addMinutes(80);
time.displayTime();
time.addHours(5);
time.displayTime();
