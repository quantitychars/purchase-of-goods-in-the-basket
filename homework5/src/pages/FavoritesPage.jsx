import React, { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";
import { useSelector } from "react-redux";
import { selectFavoriteIds } from "../store/favoritesSlice";
import ProductList from "../components/ProductList/ProductList";

export default function FavoritesPage() {
  const favIds = useSelector(selectFavoriteIds);
  const [all, setAll] = useState([]);

  useEffect(() => {
    getProducts().then(setAll).catch(console.error);
  }, []);

  const favProducts = all.filter((p) => favIds.includes(p.id));

  return favProducts.length ? (
    <ProductList items={favProducts} actions={{ showAdd: true }} />
  ) : (
    <p className="text-center py-12 text-gray-500">Нічого не вибрано</p>
  );
}
