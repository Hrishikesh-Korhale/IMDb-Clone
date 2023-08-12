import { useEffect, useState } from "react";

// Components
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import UpNext from "../components/common/UpNext";

import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";

import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Slide from "../components/Slide";

const Wrapper = styled(Box)`
  display: flex;
  margin-top: 57px;
  padding: 20px 0;
  flex-direction: row;
  @media (max-width: 464px) {
    flex-direction: column;
  }
`;
const Component = styled(Box)`
  padding: 46px;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
      </Component>
    </>
  );
};

export default Home;
