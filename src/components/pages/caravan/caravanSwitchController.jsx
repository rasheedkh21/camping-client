import React from "react";

import CaravanHMenu from "./caravanHMenu";
import CaravanVMenu from "./caravanVMenu";

const CarvanSwitchControl = ({ active }) => {
  return <>{active ? <CaravanHMenu/> : <CaravanVMenu />}</>;
};

export default CarvanSwitchControl;