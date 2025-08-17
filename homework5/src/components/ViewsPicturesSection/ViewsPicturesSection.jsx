import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ViewsPicturesSection.scss";

export default function ViewsPicturesSection({ items = [] }) {
  return (
    <section className="pictures">
      <h2 className="pictures__title">
        <span className="accent" /> Views Pictures
      </h2>

      <div className="pictures__grid">
        {items.map((p) => (
          <ProductCard product={p} key={p.id} className="pictures__item">
            <ProductCard.Image />
            <ProductCard.Info />
            <ProductCard.Actions showAdd />
          </ProductCard>
        ))}
      </div>
    </section>
  );
}
