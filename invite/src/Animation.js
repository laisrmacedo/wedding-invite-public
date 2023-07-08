import React from "react";
import Lottie from "lottie-react";
import lottie from "./lottie.json";

export const Animation = () => <Lottie animationData={lottie} loop={false} style={{height:300, width:300, overflowY: "hidden"}} />;