import styled from "styled-components";

import homePageImage from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography idea. we have
          professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={homePageImage} alt="guy with camera" />
      </Image>
    </About>
  );
};

// styled components

const About = styled.div`
  min-height: 80vh;
  color: white;
  display: flex;
  flex-direction: row;
  background-color: gray;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 3rem;

  .hide {
    overflow: hidden;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    height: 80vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default AboutSection;
