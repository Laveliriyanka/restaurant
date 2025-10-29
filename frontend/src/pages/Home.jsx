import React from "react";

import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import MenuPreview from "../components/MenuPreview";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";

export default function Home({ theme }) {
  return (
    <>
      <Hero theme={theme} />
      <AboutPreview theme={theme} />
      <MenuPreview theme={theme} />
      <Gallery theme={theme} />
      <CTA theme={theme} />
    </>
  );
}