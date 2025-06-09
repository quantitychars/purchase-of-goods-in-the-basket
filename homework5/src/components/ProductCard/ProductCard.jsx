// src/components/ProductCard/ProductCard.jsx
import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

// самі під-компоненти
import Image from "./ProductCardImage";
import Info from "./ProductCardInfo";
import Actions from "./ProductCardActions";

export const ProductContext = createContext(null);
export const useProduct = () => useContext(ProductContext);

export default function ProductCard({ product, children, className = "" }) {
  return (
    <ProductContext.Provider value={product}>
      <div
        className={`flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition ${className}`}
      >
        {children}
      </div>
    </ProductContext.Provider>
  );
}

/* 🔗 прив’язуємо під-компоненти до “головного” */
ProductCard.Image = Image;
ProductCard.Info = Info;
ProductCard.Actions = Actions;

/* (опційно) дефолт-розмітка, якщо children не передали */
ProductCard.Default = function Default() {
  const p = useProduct();
  return (
    <>
      <Image />
      <Info />
      <Actions />
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
ProductCard.defaultProps = {
  children: <ProductCard.Default />,
};
