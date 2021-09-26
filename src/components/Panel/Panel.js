import React from "react";
import "./panel.css";
import { FaBook } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

export default function Panel(props) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className={props.show ? "panel show" : "panel hide"}>
      <div className="panel-top">
        <div className="panel-title">
          <span id="panel-title">نام سایت</span>
          <span>
            <FaBook color="white" />
          </span>
        </div>
      </div>
      <div className="panel-bottom">
        <div className="tab-content">
          <div className="panel-tabs">
            <span className="tabs-title">کلاس ها</span>
            <ul>
              <Link to="/dashboard">
                <li
                  className={
                    splitLocation[1] === "dashboard" || "changepassword"
                      ? "tabs-item active"
                      : "tabs-item"
                  }
                >
                  داشبورد
                </li>
              </Link>
              <Link to="/course">
                <li
                  className={
                    splitLocation[1] === "course"
                      ? "tabs-item active"
                      : "tabs-item"
                  }
                >
                  کلاس ها
                </li>
              </Link>
              <li
                className={
                  splitLocation[1] === "match"
                    ? "tabs-item active"
                    : "tabs-item"
                }
              >
                آزمون های پیش رو
              </li>
              <li
                className={
                  splitLocation[1] === "evaluation"
                    ? "tabs-item active"
                    : "tabs-item"
                }
              >
                ارزیابی ها
              </li>
              <Link to='/onlineclass'>
              <li
                className={
                  splitLocation[1] === "onlineclass"
                    ? "tabs-item active"
                    : "tabs-item"
                }
              >
                {" "}
                جلسات آنلاین پیش رو
              </li>
              </Link>
              <Link to='/userdoc'>
              <li
                className={
                  splitLocation[1] === "userdoc"
                    ? "tabs-item active"
                    : "tabs-item"
                }
              >
                مدارک
              </li>
              </Link>
              <li
                className={
                  splitLocation[1] === "alalalalal"
                    ? "tabs-item active"
                    : "tabs-item"
                }
              >
                راهنما
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-wrapper">
          <div className="sidebar active">
            <div className="sidebar-item icon">
              <GrPersonalComputer color="white" />
            </div>
          </div>

          {/* <div className="sidebar ">
            <div className="sidebar-item">
              <GrPersonalComputer className="sidebar-icon" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
