import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/main/Header";
import Sidebar from "./components/sidebar/Sidebar";

const AdminLayout = () => {
  const { sideBtn } = useSelector((state) => state.site);
  const [pageName, setPageName] = React.useState(null);
  var isActive = sideBtn;
  if (window.innerWidth < 768) {
    isActive = false;
  }

  return (
    <React.Fragment>
      <Header pageName={pageName} isActive={isActive} />
      <Sidebar isActive={isActive} />
      <main className={"wrap " + (isActive ? "active" : "")}>
        <Outlet context={[pageName, setPageName]} />
      </main>
    </React.Fragment>
  );
};

export default AdminLayout;
