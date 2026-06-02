import { StrictMode } from "react";
import { HashRouter, Route, Routes } from "react-router";
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";

export default function Router() {
  return (
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </HashRouter>
    </StrictMode>
  );
}
