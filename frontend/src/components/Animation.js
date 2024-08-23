import React from "react";
import Lottie from "lottie-react";
import lottie from "../utils/lottie.json";

export const Animation = (props) => <Lottie animationData={lottie} loop={false} style={{height:props.height, width:props.width, filter:'invert(1)', opacity:'.8', overflowY: "hidden"}} />;