import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box } from "@mui/material";
import styled from "@emotion/styled";

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

const BannerIMG = styled("img")({
  width: "100%",
});

const Banner = ({ movies }) => {
  return (
    <Box style={{ width: "65%" }}>
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
    </Box>
  );
};

export default Banner;
