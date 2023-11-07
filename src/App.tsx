import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";

function App() {
  const headerHeight = 64;
  return (
    <>
      <Header height={headerHeight} />
      <Container>
        <Box
          sx={{
            height: `calc(100vh - ${headerHeight}px)`,
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default App;
