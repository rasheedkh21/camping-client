import React from "react";

import CaravanHMenu from "./caravanHMenu";
import CaravanVMenu from "./caravanVMenu";

const CaravanSwitchControl = ({ active }) => {
  return <>{active ? <CaravanHMenu/> : <CaravanVMenu />}</>;
};

export default CaravanSwitchControl;