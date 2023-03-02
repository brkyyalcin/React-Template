import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/auth/AuthLayout";
import Login from "../layout/auth/pages/login";
import { getLocalstorage } from "../utils";

const AuthRouter = () => {
  const token = getLocalstorage("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return !token ? (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index={true} element={<Login />} />
      </Route>
    </Routes>
  ) : null;
};

export default AuthRouter;
