import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

export default function ProductCardImage() {
  const { image, title } = useContext(ProductContext);
  return (
    <img
      src={image}
      alt={title}
      className="w-full h-56 object-cover rounded-t-xl"
      loading="lazy"
    />
  );
}
