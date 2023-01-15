import React from "react";
import Brand from "./Brand";
import NumberProducts from "./NumberProducts";
import Products from "./Products";
import Sort from "./Sort";

function Main() {
  return (
    <div className="p-10">
      <div>
        <div className="flex justify-between items-center flex-wrap">
          <NumberProducts />
          <Sort />
          <Brand />
        </div>
        <div className="flex flex-wrap justify-between my-5">
          <Products/>
        </div>
      </div>
    </div>
  );
}

export default Main;
