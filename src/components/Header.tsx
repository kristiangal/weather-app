import { AppBar, Toolbar, Typography } from "@mui/material";
import { Cloud } from "@mui/icons-material";

const Header = ({ height }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Cloud sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Weather App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
