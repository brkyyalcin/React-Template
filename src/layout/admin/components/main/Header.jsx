import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSideBtn } from "../../../../stores/site";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import { GetWord } from "../../../../utils";

const Header = ({ pageName }) => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="header-left ">
        <div className="d-flex justify-content-between alignt">
          <div className="">
            <p>Logo</p>
          </div>
          <div className="text-white mt-auto mb-auto">
            <button
              className="navbar-toggler"
              onClick={() => dispatch(setSideBtn())}
            >
              <GiIcons.GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      <div className="header-center d-none d-md-inline">
        <p>{pageName}</p>
      </div>
      <div className="header-right">
        <div class="input-group">
          <input
            type="search"
            class="form-control"
            placeholder={GetWord("ara...")}
          />
          <span class="input-group-text" id="basic-addon2">
            <AiIcons.AiOutlineSearch className="input-icon" />
          </span>
        </div>
        <a className="icon">
          <MdIcons.MdNotifications />
        </a>
        <a className="icon">
          <MdIcons.MdExitToApp />
        </a>
        {/* <button
          className="icon"
          onClick={() => {
            if (!document.fullscreenElement) {
              document.querySelector("#root").requestFullscreen();
              this.setState({ isFullScreen: true });
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
                this.setState({ isFullScreen: false });
              }
            }
          }}
        >
          <BiIcons.BiFullscreen />
        </button>
        <a className="icon">
          <MdIcons.MdOutlineSettings />
        </a>
        <a className="icon">
          <IoIcons.IoIosNotificationsOutline />
        </a>

        <Link to={"/profile"}>
          <a className="icon">
            <img
              src="https://berkayyalcin.net/PortfolioV2/static/media/berkay-yalcin.489345dd.jpg"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle"
            />
          </a>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
