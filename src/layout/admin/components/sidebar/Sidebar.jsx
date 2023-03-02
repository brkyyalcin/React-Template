import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { IoIosNotificationsOutline, IoMdPaper } from "react-icons/io";
import { MdOutlineDashboard, MdOutlineSpaceDashboard } from "react-icons/md";
import { TbClipboardText, TbClipboardX, TbWallet } from "react-icons/tb";
import { useSelector } from "react-redux";
import SidebarItem from "./SideBarItem";

const data = [
  {
    id: 1,
    isHeader: true,
    title: "Ana Menü",
  },
  {
    id: 2,
    isHeader: false,
    title: "Dashboard",
    icon: <MdOutlineDashboard className="nav-icon" />,
    pathname: "/",
  },
  {
    id: 3,
    isHeader: false,
    title: "Öğrenciler",
    icon: <GiGraduateCap className="nav-icon" />,
    pathname: "/students",
  },
  {
    id: 4,
    isHeader: false,
    title: "Eğitmenler",
    icon: <FaUserAlt className="nav-icon" />,
    pathname: "/teachers ",
  },
  {
    id: 5,
    isHeader: true,
    title: "Sorular",
  },
  {
    id: 6,
    isHeader: false,
    title: "Yeni Sorular",
    icon: <TbClipboardText className="nav-icon" />,
    pathname: "/newquestion ",
  },
  {
    id: 7,
    isHeader: false,
    title: "Tüm Sorular",
    icon: <TbClipboardText className="nav-icon" />,
    pathname: "/allquestion ",
  },
  {
    id: 8,
    isHeader: false,
    title: "Raporlanan Sorular",
    icon: <TbClipboardX className="nav-icon" />,
    pathname: "/allquestion ",
  },
  {
    id: 9,
    isHeader: false,
    title: "Raporlanan Çözümler",
    icon: <TbClipboardX className="nav-icon" />,
    pathname: "/reportedquestions ",
  },
  {
    id: 10,
    isHeader: true,
    title: "Finans",
  },
  {
    id: 11,
    isHeader: false,
    title: "Satılan Paketler",
    icon: <TbWallet className="nav-icon" />,
    pathname: "/reportedquestions ",
  },
  {
    id: 12,
    isHeader: false,
    title: "Ödeme Talepleri",
    icon: <TbWallet className="nav-icon" />,
    pathname: "/reportedquestions ",
  },
  {
    id: 13,
    isHeader: true,
    title: "Uygulama",
  },
  {
    id: 14,
    isHeader: false,
    title: "Bildirim Gönder",
    icon: <IoIosNotificationsOutline className="nav-icon" />,
    pathname: "/reportedquestions ",
  },
  {
    id: 12,
    isHeader: false,
    title: "Banner/Story Ekle",
    icon: <IoMdPaper className="nav-icon" />,
    pathname: "/reportedquestions ",
  },
  {
    id: 13,
    isHeader: false,
    title: "Test/Konu/Bilgi Kartı Ekle",
    icon: <IoMdPaper className="nav-icon" />,
    pathname: "/reportedquestions ",
  },
  {
    id: 13,
    isHeader: false,
    title: "Genel",
    icon: <MdOutlineSpaceDashboard className="nav-icon" />,
    pathname: "/reportedquestions ",
  },
];

const Sidebar = () => {
  const { sideBtn } = useSelector((state) => state.site);
  return (
    <aside className={sideBtn ? "active" : ""}>
      <nav>
        {data.map((item) => {
          return (
            <SidebarItem
              pathname={item.pathname}
              icon={item.icon}
              title={item.title}
              isHeader={item.isHeader}
              key={item.id}
            />
          );
        })}
        {/* <div className='nav-header '>
      aaa
    </div> */}
      </nav>
    </aside>
  );
};

export default Sidebar;
