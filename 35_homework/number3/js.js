let currentLight = 0;

function changeLight() {
  const lights = ['redLight', 'yellowLight', 'greenLight'];
  document
    .getElementById(lights[currentLight])
    .classList.remove(lights[currentLight].replace('Light', ''));
  currentLight = (currentLight + 1) % 3;
  document
    .getElementById(lights[currentLight])
    .classList.add(lights[currentLight].replace('Light', ''));
}
