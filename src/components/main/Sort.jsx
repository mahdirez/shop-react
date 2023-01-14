import React from "react";

function Sort() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>مرتب سازی بر اساس</p>
      <div className="flex gap-5">
        <label className="flex items-center gap-2">
          قدیمی ترین
          <input type="checkbox" />
        </label>
        <label className="flex items-center gap-2">
          جدیدترین
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
}

export default Sort;
