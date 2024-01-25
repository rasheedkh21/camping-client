import React from "react";
import  MotorHMenu from "./motorHMenu"
import  MotorVMenu from "./motorVMenu"


const MotorSwitchControl = ({ active }) => {
  return <>{active ? <MotorVMenu/> : <MotorHMenu/> }</>;
};

export default MotorSwitchControl;