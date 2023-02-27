import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/admin/AdminLayout";
import Error from "./page/Errors/Error";

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Admin Paneli</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
