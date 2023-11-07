import { AppBar, Toolbar, Typography } from "@mui/material";
import { Cloud } from "@mui/icons-material";
import { HeaderProps } from "../types/types";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ height: `${props.height}px` }}>
        <Cloud sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
