import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();
export function ContextProvider({ children }) {
  const [product, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState([]);

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
      setFilter(filter.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setFilter(filter.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  }

  const brands = ["همه", ...new Set(product.map((item) => item.category))];

  const filterBrands = (category) => {
    const value = category.target.value;
    if (value === "همه") {
    return  setFilter(product);
    }
    const loopFilter = product.filter((item) => item.category === value);
    return setFilter(loopFilter);
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
