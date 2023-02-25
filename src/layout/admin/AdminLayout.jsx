import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./main/Header";
import Sidebar from "./sidebar/Sidebar";

const AdminLayout = () => {
  const { sideBtn } = useSelector((state) => state.site);
  var isActive = sideBtn;
  if (window.innerWidth < 768) {
    console.log("mobile loading");
    isActive = false;
  }

  return (
    <React.Fragment>
      <Header isActive={isActive} />
      <Sidebar isActive={isActive} />
      <main className={"wrap " + (isActive ? "active" : "")}>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default AdminLayout;
