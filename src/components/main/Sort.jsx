import React, { useContext } from "react";
import { Context } from "../../context/Context";

function Sort() {
  const { sortProducts} = useContext(Context);
  return (
    <div className="flex flex-col justify-center items-center">
      <p>مرتب سازی بر اساس</p>
      <div className="flex gap-5">
        <label className="flex items-center gap-2">
          قدیمی ترین
          <input type="radio" value="asc" name="sort" defaultChecked onChange={sortProducts} />
        </label>
        <label className="flex items-center gap-2">
          جدیدترین
          <input type="radio" value="desc" name="sort" onChange={sortProducts} />
        </label>
      </div>
    </div>
  );
}

export default Sort;
