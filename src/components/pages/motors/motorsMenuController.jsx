import React from "react";

import HMenu from "./mototrsHmenu";
import MotorsVMenu from "./VMenuMotors";


const MenuSwitchController = ({ active}) => {
  return <div>{active ? <MotorsVMenu/>  : <HMenu />}</div>;
};

export default MenuSwitchController;
