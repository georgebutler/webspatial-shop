import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import { Spatial } from "@webspatial/core-sdk";

if (Spatial.prototype.runInSpatialWeb()) {
  document.documentElement.classList.add("isSpatial");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
