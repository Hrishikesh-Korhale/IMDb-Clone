import { useEffect, useState } from "react";

// Components
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import UpNext from "../components/common/UpNext";

import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";

import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  display: flex;
  margin-top: 57px;
  padding: 20px 46px;
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
      <Wrapper>
        <Banner movies={movies} />
        <UpNext movies={movies} />
      </Wrapper>
    </>
  );
};

export default Home;
