import { TextField, Button, Typography, Box, FormControl } from "@mui/material";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", paddingTop: "24px" }}>
      <Typography variant="h4" component="h2" fontWeight={600}>
        Hey there!
      </Typography>
      <Typography gutterBottom sx={{ paddingY: "12px" }} color={grey[700]}>
        Enter the location, where you want to check the weather ! 🌤️
      </Typography>
      <FormControl className="inputGroup" sx={{ width: "50%" }}>
        <TextField
          id="standard-basic"
          label="Location"
          variant="standard"
          sx={{ marginBottom: "36px" }}
        />
        <Button variant="outlined">Search</Button>
      </FormControl>
    </Box>
  );
};

export default Home;
