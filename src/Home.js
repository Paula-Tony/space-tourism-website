import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="info">
          <p className="heading-5">So, you want to travel to</p>
          <h1 className="heading-1">Space</h1>
          <p className="body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <Link to="/destination">explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
