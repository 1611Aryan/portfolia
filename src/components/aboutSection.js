import home1 from "./../img/home1.png";
import styled from "styled-components";
import { Layout } from "./../styles";
const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id
          omnis cupiditate ex reiciendis facilis nostrum
        </p>
        <button>Get in Touch</button>
      </div>
      <div className="image">
        <img src={home1} alt="Taur" />
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled(Layout)``;

export default AboutSection;
