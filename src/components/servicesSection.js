import clock from "./../img/clock.svg";
import diaphgram from "./../img/diaphragm.svg";
import money from "./../img/money.svg";
import teamwork from "./../img/teamwork.svg";
import home2 from "./../img/home2.png";

import styled from "styled-components";
import { Layout } from "./../styles";

const ServicesSection = () => {
  return (
    <StyledServices>
      <div className="description">
        <h2>
          High <span>Quality</span> Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphgram} alt="" />
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </StyledServices>
  );
};

const StyledServices = styled(Layout)`
  .cards {
    margin-top: 2rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .card {
      padding: 2rem 4rem 2rem 0rem;
      flex-basis: 20rem;
      .icon {
        display: flex;
        align-items: center;

        h3 {
          margin-left: 1rem;
          background: white;
          color: black;
          padding: 0.7rem 1rem;
          font-size: 1.1rem;
        }
      }
      p {
        padding-top: 2rem;
      }
    }
  }
`;

export default ServicesSection;
