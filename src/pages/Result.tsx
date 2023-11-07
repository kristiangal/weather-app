import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  return <div>{location.state}</div>;
};

export default Result;
