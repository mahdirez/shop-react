import React, { useContext } from "react";
import { Context } from "../../context/Context";

function Products() {
  const {product } = useContext(Context);
  return product.map((item) => {
    return (
      <div className="w-1/4  shadow-2xl p-5 my-5 mx-1 bg-white" key={item.id}>
        <img src={item.images[0]} className="w-full h-80 object-contain	" />
        <p>{item.title}</p>
        <hr className="my-2" />
        <div className="flex justify-between">
          <button>افزودن به سبد خرید</button>
          <p>{item.price} $</p>
        </div>
      </div>
    );
  });
}

export default Products;
