import React from "react";

import TuningVMenu from "./tuningVMenu";
import TuningHMenu from "./tuningHMenu";

const TuningSwitch = ({ active }) => {
  return <>{active ? <TuningVMenu/> : <TuningHMenu/>}</>;
};

export default TuningSwitch;