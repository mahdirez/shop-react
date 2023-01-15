import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();
export function ContextProvider({ children }) {
  const [product, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");

  async function getData() {
    const { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);
  }

  useEffect(() => {
    getData();
  }, []);

  function sortProducts(e) {
    setSort(e.target.value);
    if (sort === "asc") {
      setProducts(product.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setProducts(product.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  }

  const brands = ["همه", ...new Set(product.map((item) => item.category))];

  const filterBrands = (category) => {
    const value = category.target.value;
    if (filter === "همه") {
      return setProducts(product);
    }
    const loopFilter = product.filter((item) => item.category === value);
    return setProducts(loopFilter);
  };
  return (
    <Context.Provider
      value={{
        product,
        setProducts,
        sort,
        setSort,
        sortProducts,
        brands,
        filterBrands,
        filter,
        setFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
}
