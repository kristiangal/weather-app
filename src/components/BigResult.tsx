import { Typography, Box } from "@mui/material";
import { BigResultProps } from "../types/types";
import { grey } from "@mui/material/colors";

const BigResult: React.FC<BigResultProps> = ({ data }) => {
  return (
    <Box
      textAlign="center"
      sx={{
        height: "50%",
        backgroundColor: "primary['dark']",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="h2">
        {data.name}
      </Typography>
      <Typography color={grey[700]} sx={{ marginBottom: "8px" }}>
        {data.country}
      </Typography>
      <div className="conditionInfo">
        <img src={data.icon} height={100} width={100} />
        <Typography color={grey[700]}>{data.condition}</Typography>
      </div>
      <Typography variant="h3">{data.temp} °C</Typography>
    </Box>
  );
};

export default BigResult;
