import React from "react";
import Lottie from "lottie-react";
import lottie from "../utils/loading_animation.json";

export const LoadingAnimation = (props) => <Lottie animationData={lottie} loop={true} style={{height:props.height, filter:'sepia(1)', opacity:'.3', width:props.width, overflowY: "hidden"}} />;