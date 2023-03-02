import React, { useEffect } from "react";
import { Route, Router, useNavigate } from "react-router-dom";
import AdminLayout from "../layout/admin/AdminLayout";
import { getLocalstorage } from "../utils";

const PrivateRouter = () => {
  const navigate = useNavigate();
  const token = getLocalstorage("token");

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);
  return token ? (
    <Router>
      <Route path="/" element={<AdminLayout />} />
    </Router>
  ) : null;
};

export default PrivateRouter;
