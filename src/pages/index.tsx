import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const MainPage = lazy(() => import("./main"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Routing;
