import React, { useContext } from "react";
import { Context } from "../../context/Context";

function Brand() {
  const { product , brands , filterBrands , filter , setFilter} = useContext(Context);
  return (
    <div className="flex gap-4 items-center justify-center">
      برند ها
      <select value={filter} onChange={filterBrands}  className="outline-none border-2 w-28">
        
          {brands.map((item,index) => {
           return <option value={item} key={index}>{item}</option>;
          })}
   
      </select>
    </div>
  );
}

export default Brand;
