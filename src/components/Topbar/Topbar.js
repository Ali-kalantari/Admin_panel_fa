import React, { useState } from "react";
import "./topbar.css";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";

import moment from "moment-jalaali";
import { Link } from "react-router-dom";

export default function Topbar(props) {
  const [date] = useState(moment().format("jYYYY/jM/jD"));
  const [toggle, settoggle] = useState(false);

  const Dropdown = () => {
    return (
      <div className="dropdown">
        <Link to="/profile">
          <div className="dropdown-item">
            پروفایل
            <span>
              <CgProfile />
            </span>{" "}
          </div>
        </Link>
        <Link to="/changepassword">
          <div className="dropdown-item">
            تغییر کلمه عبور{" "}
            <span>
              <RiLockPasswordLine />
            </span>
          </div>
        </Link>
        <Link to="">
          <div className="dropdown-item">
            خروج
            <span>
              <ImExit />
            </span>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="topbar">
      <div className="topbar-top">
        {toggle ? <Dropdown /> : null}
        <div className="topbar-left">
          <div className="topbar-left-item">
            <img
              onClick={() => settoggle(!toggle)}
              src="https://i.pravatar.cc/300"
              alt="avatar"
            />
          </div>
          <div className="topbar-left-item">
            <span>{date}</span>
          </div>
        </div>
        <div className="topbar-right">
          <Link to="/guide">
            <div className="topbar-right-item">راهنما</div>
          </Link>
          <Link to="/dashboard">
            <div className="topbar-right-item">داشبورد</div>
          </Link>
          <Link to="/dashboard">
            <div className="topbar-right-item">صفحه اصلی</div>
          </Link>
          <div onClick={props.toggle} className="topbar-right-item icon">
            <FiMenu />
          </div>
        </div>
      </div>
      <div className="topbar-bottom">
        <Link to="profile" className="topbar-bottom-link">
          علی کلانتری
        </Link>
        <div className="topbar-bottom-right">کلاس ها</div>
      </div>
    </div>
  );
}
