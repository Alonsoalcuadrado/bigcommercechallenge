import './Countries.css';

const CountriesList = ({ country }) => {
  const { flag_4x3, name, capital } = country;
  return (
    <li className="list-item">
      <img className="list-image" src={flag_4x3} alt={name} />
      <div className="list-content">
        <h3 className="list-name">{name}</h3>
        <p className="list-small">{capital ? `Capital: ${capital}` : 'No capital'}</p>
      </div>
    </li>
  );
};

export default CountriesList;
