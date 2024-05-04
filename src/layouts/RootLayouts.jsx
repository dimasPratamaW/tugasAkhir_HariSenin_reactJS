import React from "react";
import Footer from "../components/Footer";
import NavbarNew from "../components/NavbarNew";

export default function RootLayouts({ children }) {
  return (
    <>
      <NavbarNew />
      {children}
      <Footer />
    </>
  );
}
