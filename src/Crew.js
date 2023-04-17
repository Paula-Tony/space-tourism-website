import useFetch from './useFetch';
import { useState } from 'react';

const Crew = () => {
  const data = useFetch('crew');
  const filterData = (key) => {
    return data.filter((data) => {
      return data.name === key;
    });
  };
  const [crew, setCrew] = useState('Douglas Hurley');

  const handleClick = (e) => {
    setCrew(e.target.dataset.crew);
    document
      .querySelectorAll('.bullets span')
      .forEach((span) => span.classList.remove('active'));
    return e.target.classList.add('active');
  };

  return (
    <div className="crew">
      <div className="container">
        <div className="left">
          <p className="heading-5">
            <span>02</span>Meet your crew
          </p>
          <div className="heading-4">{data && filterData(crew)[0].role}</div>
          <div className="heading-3">{data && filterData(crew)[0].name}</div>
          <p className="body-text">{data && filterData(crew)[0].bio}</p>
          <div className="bullets">
            {data &&
              data.map((c, i) => (
                <span
                  className={i === 0 ? 'active' : ''}
                  data-crew={c.name}
                  key={i}
                  onClick={handleClick}
                ></span>
              ))}
          </div>
        </div>
        <div className="right">
          <img src={data && require(`${filterData(crew)[0].image}`)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
