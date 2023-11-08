import { Typography, Box } from "@mui/material";
import { BigResultProps } from "../types/types";

const BigResult: React.FC<BigResultProps> = ({ data }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h3" component="h2">
        {data.name}
      </Typography>
      <Typography variant="h5" component="h3">
        {data.country}
      </Typography>
      <img src={data.icon} />
      <Typography variant="h5">{data.condition}</Typography>
      <Typography variant="h2">{data.temp} C</Typography>
    </Box>
  );
};

export default BigResult;
