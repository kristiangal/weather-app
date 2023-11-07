import { AppBar, Toolbar, Typography } from "@mui/material";
import { Cloud } from "@mui/icons-material";
import { HeaderProps } from "../types/types";
import { Link } from "react-router-dom";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ height: `${props.height}px` }}>
        <Link to="/">
          <Cloud sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Weather App
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
