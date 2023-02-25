import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { sideBtn } = useSelector((state) => state.site);
  return (
    <aside className={sideBtn ? "active" : ""}>
      <nav>
        {/* {data.map((item) => {
          return (
            <SidebarItem
              pathname={item.pathname}
              icon={item.icon}
              title={item.title}
              isHeader={item.isHeader}
              key={item.id}
            />
          );
        })} */}
        {/* <div className='nav-header '>
      aaa
    </div> */}
      </nav>
    </aside>
  );
};

export default Sidebar;
