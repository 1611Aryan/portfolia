import { motion } from "framer-motion";

import { pageAnimation } from "../animation";

import athelete from "./../img/athlete-small.png";
import goodTimes from "./../img/goodtimes-small.png";
import racer from "./../img/theracer-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ffffff" }}
    >
      <div className="movie">
        <h2>Athlete</h2>
        <div className="line"></div>
        <Link to="work/the-athlete">
          <img src={athelete} alt="athlete" />
        </Link>
      </div>
      <div className="movie">
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="work/the-racer">
          <img src={racer} alt="" />
        </Link>
      </div>
      <div className="movie">
        <h2>Good Time</h2>
        <div className="line"></div>
        <Link to="work/good-times">
          <img src={goodTimes} alt="" />
        </Link>
      </div>
    </StyledWork>
  );
};
const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 3rem;
  h2 {
    padding: 1rem 0rem;
  }
  .movie {
    padding-bottom: 10rem;
    .line {
      height: 0.5rem;
      background: #cccccc;
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
`;

export default OurWork;
