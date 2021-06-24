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
              <img alt="icon" src={Clock} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={TeamWork} alt="" />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={Dia} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="icon" src={Money} alt="" />
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
