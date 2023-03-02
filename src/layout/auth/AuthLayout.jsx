import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="auth">
      <div className="back-color">
        <div className="form-div">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
