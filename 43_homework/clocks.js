const form = document.getElementById('time-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputTimezone = e.target.querySelector('input#timezone')?.value;

  if (inputTimezone) {
    new WorldClock(inputTimezone);
  } else {
    alert('Enter time zone please');
  }
});

class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.clockElement = document.createElement('div');
    this.clockElement.classList.add('clock');
    this.render();
    this.addClickListener();
  }

  addClickListener() {
    this.clockElement.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('.button1')) {
        this.getCurrentDate();
      } else if (target.closest('.button2')) {
        this.getCurrentDateTime();
      } else if (target.closest('.button3')) {
        this.deleteClock();
      }
    });
  }

  getCurrentDate() {
    try {
      const date = new Date().toLocaleDateString('uk-UA', {
        timeZone: this.timezone,
      });

      this.clockElement.querySelector('.time-output').textContent = date;
    } catch (err) {
      alert('Incorrect time zone');
    }
  }

  getCurrentDateTime() {
    try {
      const time = new Date().toLocaleString('uk-UA', {
        timeZone: this.timezone,
      });

      this.clockElement.querySelector('.time-output').textContent = time;
    } catch (err) {
      alert('Incorrect time zone');
    }
  }

  deleteClock() {
    this.clockElement.remove();
  }

  render() {
    this.clockElement.innerHTML = `
    <p class="title">Time zone: ${this.timezone}</p>
   
    <button class="button button1">Current date</button>
    <button class="button button2">Current date&time</button>
    <button class="button button3">Delete watch</button>
  
    <div class="time-output"></div>
  `;
    document.getElementById('clockContainer').appendChild(this.clockElement);
  }
}
