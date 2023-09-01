import React, { useState } from "react";
import Motors from "./Motors";
import MenuController from "../../controller/menuController";

const MainMotor = () => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <Motors
        onClick={(state) => {
          setActive(state);
        }}
      />
      <MenuController active={active} />
    </div>
  );
};

export default MainMotor;