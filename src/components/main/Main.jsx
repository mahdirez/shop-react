import React from "react";
import Brand from "./Brand";
import NumberProducts from "./NumberProducts";
import Sort from "./Sort";

function Main() {
  return (
    <div className="p-10">
      <div>
        <div className="flex justify-between items-center flex-wrap">
          <NumberProducts/>
          <Sort/>
          <Brand/>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
