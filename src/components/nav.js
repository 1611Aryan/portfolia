import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Heya
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="work">Our Work</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  min-height: 10vh;
  background: #2c2c2c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3rem;
  h1 {
    font-family: "lobster", cursive;
    font-size: 2rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0 2rem;
      position: relative;
    }
  }
`;

export default Nav;
