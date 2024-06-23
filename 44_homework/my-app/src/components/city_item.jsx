export default function CityItem({ header, text, icon }) {
  return (
    <li className="item">
      <h2 className="item__header">{header}</h2>
      <p className="item__text">
        {text} <i className={`wi wi-city ${icon}`}></i>
      </p>
    </li>
  );
}
