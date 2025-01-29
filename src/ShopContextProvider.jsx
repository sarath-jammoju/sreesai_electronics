/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import products from "../src/data/product.json";

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [productData, setProducts] = useState([products]);

  //productb data

  return (
    <shopContext.Provider value={{ productData, setProducts }}>
      {children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
