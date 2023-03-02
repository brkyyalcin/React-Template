import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/*" element={<PrivateRouter />} />
    </Routes>
  );
};

export default RouterPage;
