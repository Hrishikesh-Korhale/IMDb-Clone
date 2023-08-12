import styled from "@emotion/styled";
import { Star } from "@mui/icons-material";
import { List, ListItem, Typography } from "@mui/material";

const PosterIMG = styled("img")({
  height: 100,
});

const Container = styled(List)`
  display: flex;
`;

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Container>
          <ListItem>
            <PosterIMG
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="poster"
            />
          </ListItem>
          <ListItem>
            <Typography>{movie.original_title}</Typography>
          </ListItem>
          <ListItem>
            <Star color="warning" />
            <Typography>{movie.vote_average}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{movie.release_date}</Typography>
          </ListItem>
        </Container>
      ))}
    </>
  );
};

export default MoviesList;
