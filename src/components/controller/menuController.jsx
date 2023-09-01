import React from "react";
import VMenu from "./vMenu";
import HMenu from "./hMenu";

const MenuController = ({ active }) => {
  return <div>{active ? <VMenu /> : <HMenu />}</div>;
};

export default MenuController;