import {
  AppBar,
  styled,
  Toolbar,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoURL } from "../../constants/constant";
import { BookmarkAdd, ExpandMore, Menu } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../../constants/routes";

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 30px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const SearchBox = styled(InputBase)`
  background: #ffffff;
  width: 55%;
  height: 30px;
  border-radius: 5px;
`;
const Wrapper = styled(Box)`
  width: 80%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    display: none !important;
  }
`;

const Logo = styled("img")({
  width: 62,
});

const Header = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const Navigate = useNavigate();

  return (
    <AppBar>
      <StyledToolBar>
        <Logo
          src={logoURL}
          alt="logo"
          onClick={() => Navigate(routhPath.home)}
          style={{ cursor: "pointer" }}
        />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <Wrapper>
          <SearchBox />
          <Typography>
            IMDb<Box component="span">Pro</Box>
          </Typography>
          <Box>
            <BookmarkAdd />
            <Typography>Watchlist</Typography>
          </Box>
          <Typography>Sign In</Typography>
          <Box>
            <Typography>EN</Typography>
            <ExpandMore />
          </Box>
        </Wrapper>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
