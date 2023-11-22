import { ArrowBack } from "@mui/icons-material";
import { Typography, Box, Link } from "@mui/material";
import { SecondaryHeaderProps } from "../types/types";
import { grey } from "@mui/material/colors";

import { Link as RouterLink } from "react-router-dom";

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ locationName }) => {
  return (
    <Box sx={{ display: "flex", paddingTop: "24px", paddingBottom: "12px" }}>
      <Link color={grey[700]} component={RouterLink} to="/">
        <ArrowBack sx={{ fontSize: "32px" }} />
      </Link>
      <Box sx={{ display: "flex", marginX: "auto" }}>
        <Typography variant="h6">Weather right now in </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600", paddingLeft: "5px" }}>
          "{locationName}"
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondaryHeader;
