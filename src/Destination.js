import { useState } from 'react';
import useFetch from './useFetch';

const Destination = () => {
  const data = useFetch('destinations');
  const filterData = (key) => {
    return data.filter((data) => {
      return data.name === key;
    });
  };
  const [Planet, setPlanet] = useState('Moon');

  const handleClick = (e) => {
    setPlanet(e.target.dataset.key);
    document
      .querySelectorAll('.planets .planet')
      .forEach((planet) => planet.classList.remove('active'));
    return e.target.classList.add('active');
  };

  return (
    <div className="destination">
      <div className="container">
        <div className="left">
          <p className="heading-5">
            <span>01</span>Pick your destination
          </p>
          <img
            src={data && require(`${filterData(Planet)[0].image}`)}
            alt="moon"
          />
        </div>
        <div className="right">
          <ul className="planets">
            <li className="planet active" data-key="Moon" onClick={handleClick}>
              {data && filterData('Moon')[0].name}
            </li>
            <li className="planet" data-key="Mars" onClick={handleClick}>
              {data && filterData('Mars')[0].name}
            </li>
            <li className="planet" data-key="Europa" onClick={handleClick}>
              {data && filterData('Europa')[0].name}
            </li>
            <li className="planet" data-key="Titan" onClick={handleClick}>
              {data && filterData('Titan')[0].name}
            </li>
          </ul>
          <div className="heading-2">{data && filterData(Planet)[0].name}</div>
          <p className="body-text">
            {data && filterData(Planet)[0].description}
          </p>
          <div className="description">
            <div>
              <p className="title">AVG. DISTANCE</p>
              <p className="value">{data && filterData(Planet)[0].distance}</p>
            </div>
            <div>
              <p className="title">Est. travel time</p>
              <p className="value">{data && filterData(Planet)[0].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
