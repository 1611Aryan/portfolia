import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  align-items: center;
  .description {
    color: white;
    flex: 1;
    height: 45%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding-right: 3rem;
  }
  .hide {
    overflow: hidden;
  }
  h2 {
    font-size: 3rem;
    span {
      color: #23d997;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: lighter;
  }
  button {
    margin-top: 1rem;
    font-size: 1.1rem;
    background: #1b1b1b;
    color: white;
    border: 2px solid #23d997;
    padding: 0.8rem 1.1rem;
    outline: 0;
  }

  .image {
    overflow: hidden;
    flex: 1;
    img {
      width: 95%;
      height: 75vh;
      object-fit: cover;
    }
  }
`;
