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

  return (
    <AppBar>
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
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
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
