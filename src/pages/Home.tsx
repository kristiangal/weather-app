import { TextField, Button, Typography, Box, FormControl } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBaseWeatherUri } from "../utils/helperFunctions";

const Home = () => {
  const [locationValue, setLocationValue] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const searchForLocation = () => {
    if (locationValue === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    const fetchUri = `${getBaseWeatherUri()}&q=${locationValue}`;
    navigate("/result", { state: fetchUri });
  };

  return (
    <Box sx={{ textAlign: "center", paddingTop: "24px", marginTop: "auto" }}>
      <Typography variant="h4" component="h2" fontWeight={600}>
        Hey there!
      </Typography>
      <Typography gutterBottom sx={{ paddingY: "12px" }} color={grey[700]}>
        Enter the location, where you want to check the weather ! 🌤️
      </Typography>
      <FormControl className="inputGroup" sx={{ width: "50%" }}>
        <TextField
          error={error}
          id="standard-basic"
          label="Location"
          variant="standard"
          sx={{ marginBottom: "36px" }}
          value={locationValue}
          helperText={error ? "Required field" : ""}
          onChange={(e) => setLocationValue(e.target.value)}
        />
        <Button onClick={searchForLocation} variant="outlined">
          Search
        </Button>
      </FormControl>
    </Box>
  );
};

export default Home;
