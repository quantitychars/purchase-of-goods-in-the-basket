import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const CartPage = lazy(() => import("../pages/CartPage.jsx"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage.jsx"));

function Loader() {
  return <p style={{ textAlign: "center" }}>Loading…</p>;
}

export default function AppRouters() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<h1>404 — Page not found</h1>} />
      </Routes>
    </Suspense>
  );
}
