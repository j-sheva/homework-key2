class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.clockElement = document.createElement('div');
    this.clockElement.classList.add('clock');
    this.render();
  }

  getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('uk-UA', { timeZone: this.timezone });
  }

  getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('uk-UA', { timeZone: this.timezone });
  }

  render() {
    this.clockElement.innerHTML = `
    <p class="title">Time zone: ${this.timezone}</p>
   
    <button class="button button1" onclick="showDate(this)">Current date</button>
    <button class="button button2" onclick="showDateTime(this)">Current date&time</button>
    <button class="button button3" onclick="deleteClock(this)">Delete watch</button>
  
    <div class="time-output"></div>
  `;
    document.getElementById('clockContainer').appendChild(this.clockElement);
  }

  deleteClock() {
    this.clockElement.remove();
  }
}

function addClock() {
  const timezone = document.getElementById('timezone').value;
  if (timezone) {
    new WorldClock(timezone);
  } else {
    alert('Enter time zone please');
  }
}

function showDate(button) {
  const clockElement = button.parentElement;
  const timezone = clockElement.querySelector('p').textContent.split(': ')[1];
  try {
    const output = new Date().toLocaleDateString('uk-UA', {
      timeZone: timezone,
    });
    clockElement.querySelector(
      '.time-output'
    ).textContent = `Current date: ${output}`;
  } catch (error) {
    alert('Incorrect time zone');
  }
}

function showDateTime(button) {
  const clockElement = button.parentElement;
  const timezone = clockElement.querySelector('p').textContent.split(': ')[1];
  try {
    const output = new Date().toLocaleString('uk-UA', {
      timeZone: timezone,
    });
    clockElement.querySelector(
      '.time-output'
    ).textContent = `Current date and time: ${output}`;
  } catch (error) {
    alert('Incorrect time zone');
  }
}

function deleteClock(button) {
  const clockElement = button.parentElement;
  clockElement.remove();
}
