import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ViewsPicturesSection from "../components/ViewsPicturesSection/ViewsPicturesSection";
import useProducts from "../hooks/UseProducts";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  const { data } = useProducts();
  return (
    <>
      <HeroBanner />
      {data && <ViewsPicturesSection items={data} />}
      <Footer />
    </>
  );
}
