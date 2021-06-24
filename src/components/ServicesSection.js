// import icons

import Clock from "../img/clock.svg";
import TeamWork from "../img/teamwork.svg";
import Dia from "../img/diaphragm.svg";
import Money from "../img/money.svg";

// image

import Home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality </span>Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img alt="icon1" src={Clock} />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon2">
              <img alt="icon" src={TeamWork} />
              <h3>TeamWork</h3>
              <img alt="icon" src={Dia} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon3">
              <img alt="icon4" src={Money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
      <img alt="Camera" src={Home2} />
    </div>
  );
};

export default ServicesSection;
