import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// mui materials
import { Box, Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";

// components
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  MovieType,
} from "../constants/constant";
import { categoryMovies } from "../services/api";
import MoviesList from "../components/MoviesList";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// const BannerIMG = styled("img")({
//   height : 450,
//   width: '100%'
// });

const BannerIMG = styled("img")`
  width: 100%;
  height: 450px;

  @media (max-width: 464px) {
    height: 100px;
  }
`;

const Container = styled(Box)`
  width: 80%;
  margin: 70px auto;
`;

const ChartsContainer = styled(Box)`
  background: #f5f5f5;
  padding: 10px;
`;

const CatMovies = ({ setProgress }) => {
  const [movies, setMovies] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const getData = async (API_URL) => {
      setProgress(30);
      let response = await categoryMovies(API_URL);
      setProgress(70);
      setMovies(response.results);
      setProgress(100);
    };
    let API_URL;

    if (search.includes("popular")) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_API_URL;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
    }

    getData(API_URL);
  }, [search, setProgress]);

  return (
    <Container>
      <Carousel
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
      >
        {movies.map((movie) => (
          <BannerIMG
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="banner"
          />
        ))}
      </Carousel>
      <ChartsContainer>
        <Typography variant="h6">IMDb Charts</Typography>
        <Typography variant="h4">
          IMDb {MovieType[search.split("=")[1]]} Movies
        </Typography>
        <Typography style={{ fontSize: 12, margin: 5 }}>
          IMDb Top {movies.length} as rated by regular IMDb voters
        </Typography>
        <Divider />
        <MoviesList movies={movies} />
      </ChartsContainer>
    </Container>
  );
};

export default CatMovies;
