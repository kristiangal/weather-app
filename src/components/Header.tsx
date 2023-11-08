import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { Cloud } from "@mui/icons-material";
import { HeaderProps } from "../types/types";

import { Link as RouterLink } from "react-router-dom";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ height: `${props.height}px` }}>
        <Cloud sx={{ mr: 2 }} />
        <Link component={RouterLink} to="/">
          <Typography
            href="/"
            component="a"
            variant="h6"
            color="black"
            sx={{ textDecoration: "none" }}
          >
            Weather App
          </Typography>{" "}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
