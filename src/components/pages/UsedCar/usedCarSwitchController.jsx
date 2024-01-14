import React from "react";


import UsedCArVMenu from "./UsedCArVMenu";
import UsedCarHMenu from "./usedCarHMenu";

const UsedCarSwitchControl = ({ active }) => {
  return <>{active ? <UsedCArVMenu/> : <UsedCarHMenu/>}</>;
};

export default UsedCarSwitchControl;