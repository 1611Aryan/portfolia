import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import { pageAnimation } from "../animation";
import { MovieState } from "./../movieState";
const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((moviesList) => moviesList.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledMovieDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="headline">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt=""></img>
          </div>
          <div className="awards">
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </div>
          <div className="secondaryImage">
            <img src={movie.secondaryImg} alt="" />
          </div>
        </StyledMovieDetails>
      )}
    </>
  );
};

const StyledMovieDetails = styled(motion.div)`
  color: white;
  .headline {
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
  .awards {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 10rem;
    .award {
      padding: 5rem;
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 0.9rem;
        padding: 2rem 0;
      }
      .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
      }
    }
  }
  .secondaryImage {
    img {
      height: 100vh;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const Award = ({ award }) => {
  return (
    <div className="award">
      <h3>{award.title}</h3>

      <div className="line"></div>

      <p>{award.description}</p>
    </div>
  );
};

export default MovieDetail;
