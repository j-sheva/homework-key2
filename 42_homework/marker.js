class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage;
  }

  write(text) {
    let output = '';
    for (let char of text) {
      if (this.inkPercentage <= 0) {
        break;
      }
      if (!char.match(/\s/)) {
        this.inkPercentage -= 0.5;
      }
      output += char;
    }
    console.log(`%c${output}`, `color: ${this.color}`);
    console.log(`Ink left: ${this.inkPercentage}%`);
  }
}

class RefillableMarker extends Marker {
  refill() {
    this.inkPercentage = 100;
    console.log(`Marker refilled, ink: ${this.inkPercentage}%`);
  }
}

const marker = new Marker('green', 10);
marker.write('Hello, World!');
marker.write('Life is short');

const refillableMarker = new RefillableMarker('purple', 10);
refillableMarker.write('Refillable marker test');
refillableMarker.refill();
refillableMarker.write('We are back!');
