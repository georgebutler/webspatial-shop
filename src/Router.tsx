import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";

export default function Router() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
