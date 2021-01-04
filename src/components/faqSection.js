import styled from "styled-components";
import { Layout } from "./../styles";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>

      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            vitae accusantium.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            vitae accusantium.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            vitae accusantium.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products Do You Offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            vitae accusantium.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};
const StyledFaq = styled(Layout)`
  display: block;
  color: white;

  h2 {
    color: white;
    span {
      display: block;
    }
  }
  .question {
    h4 {
      font-size: 1.5rem;
      padding: 1.5rem 0 0 0;
    }
    p {
      padding: 1.25rem 0 0 0;
    }
    .faq-line {
      margin-top: 1rem;

      width: 100%;
      height: 3px;
      background: white;
    }
  }
`;
export default FaqSection;
