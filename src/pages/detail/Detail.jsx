import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  console.log(location.state);
  return <div>detail</div>;
}

export default Detail;
