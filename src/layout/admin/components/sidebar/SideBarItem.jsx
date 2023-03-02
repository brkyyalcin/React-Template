import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ isHeader, title, icon, pathname }) => {
  return (
    <React.Fragment>
      {isHeader ? (
        <div className="nav-header">{title}</div>
      ) : (
        <NavLink className="nav-link" to={pathname}>
          {icon}
          <span className="nav-title">{title}</span>
        </NavLink>
      )}
    </React.Fragment>
  );
};

export default SidebarItem;
