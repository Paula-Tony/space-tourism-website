import useFetch from './useFetch';
import { useState, useEffect } from 'react';

const Technology = () => {
  const data = useFetch('technology');
  const filterData = (key) => {
    return data.filter((data) => {
      return data.name === key;
    });
  };
  const [tech, setTech] = useState('Launch vehicle');
  const [imgSize, setImgSize] = useState('portrait');

  const handleClick = (e) => {
    setTech(e.target.dataset.tech);
    document
      .querySelectorAll('.bullets span')
      .forEach((span) => span.classList.remove('active'));
    return e.target.classList.add('active');
  };

  const handleImgSize = () => {
    if (document.documentElement.clientWidth > 992) {
      return setImgSize('portrait');
    } else {
      return setImgSize('landscape');
    }
  };
  useEffect(() => {
    handleImgSize();
  });

  return (
    <div className="technology">
      <div className="container">
        <p className="heading-5">
          <span>03</span>Pick your destination
        </p>
        <div className="tech-container">
          <div className="left">
            <div className="bullets">
              {data &&
                data.map((c, i) => (
                  <span
                    className={i === 0 ? 'active heading-4' : 'heading-4'}
                    data-tech={c.name}
                    key={i}
                    onClick={handleClick}
                  >
                    {i + 1}
                  </span>
                ))}
            </div>
            <div className="tech-info">
              <p>the terminology...</p>
              <div className="heading-3">
                {data && filterData(tech)[0].name}
              </div>
              <div className="body-text">
                {data && filterData(tech)[0].description}
              </div>
            </div>
          </div>
          <div className="right">
            <img
              src={data && require(`${filterData(tech)[0].images[imgSize]}`)}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
