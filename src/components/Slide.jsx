import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledSlide = styled("img")({
  width: "100%",
  marginTop: 20,
});

const Text = styled(Typography)`
  color: #fff;
`;

const Slide = ({ movies }) => {
  return (
    <Box style={{ width: "100%" }}>
      <Carousel
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        responsive={responsive}
        // autoPlay={true}
        infinite={true}
        // autoPlaySpeed={3000}
        slidesToSlide={5}
      >
        {movies.map((movie) => (
          <>
            {" "}
            <StyledSlide
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="slide"
            />
            <Text>{movie.original_title}</Text>
          </>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
