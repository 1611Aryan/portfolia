import home1 from "./../img/home1.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, fade, imageAnim } from "../animation";
import { Layout } from "./../styles";
const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id
          omnis cupiditate ex reiciendis facilis nostrum
        </motion.p>
        <motion.button variants={fade}>Get in Touch</motion.button>
      </div>
      <div className="image">
        <motion.img variants={imageAnim} src={home1} alt="Taur" />
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled(Layout)`
  .description {
    overflow: hidden;
  }
`;

export default AboutSection;
