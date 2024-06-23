import { useState } from 'react';
import './styles/weather-icons.min.css';
import './App.css';
import data from './data/data.json';
import CityItem from './components/city_item';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>
          CSS Weather Forecast
          <i class="wi wi-city wi-sunrise"></i>
        </h1>

        <ul>
          {data.items.map((item, index) => (
            <CityItem
              key={index}
              header={item.header}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </ul>

        <div className="small">
          <small>
            Have a nice day and don't forget umbrella if you are in New Delhi
            now!
          </small>
        </div>
      </main>
    </>
  );
}

export default App;
