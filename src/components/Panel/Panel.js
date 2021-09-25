import React from "react";
import "./panel.css";
import { FaBook } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Panel(props) {
  return (
    <div className={props.show ? 'panel show' : 'panel hide'}>
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
            <div className='panel-tabs'>
                <span className='tabs-title'>کلاس ها</span>
                <ul>
                    <Link to='/dashboard'><li className='tabs-item active'>داشبورد</li></Link>
                    <Link to='/course'><li className='tabs-item'>کلاس ها</li></Link>
                    <li className='tabs-item'>آزمون های پیش رو</li>
                    <li className='tabs-item '>ارزیابی ها</li>
                    <li className='tabs-item'> جلسات آنلاین پیش رو</li>
                    <li className='tabs-item'>مدارک</li>
                    <li className='tabs-item'>راهنما</li>
                </ul>
            </div>
        </div>

        <div className="sidebar-wrapper">
          <div className="sidebar active">
            <div className="sidebar-item icon">
              <GrPersonalComputer color='white' />
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
