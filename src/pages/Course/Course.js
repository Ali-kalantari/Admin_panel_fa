import React from "react";
import { Link } from "react-router-dom";
import "./course.css";
import { coursedata } from "./../../Data";
export default function Course() {
  return (
    <div className="course">
      <div className="course-container">
        {/*  */}
        <div className="course-header-title">
          <span id="enter-links"></span>
          <span id="modares">مدرس</span>
          <span id="zirgroup">زیر گروه</span>
          <span id="dars">درس</span>
          <span id="term">ترم</span>
          <span id="markaz">مرکز</span>
          <span id="shenase">شناسه</span>
        </div>
        {/*  */}
        {coursedata.map((i) => {
          return (
            <div key={i.id} className="course-content">
              <Link id="enter-links-link">
                <span id="enter-links">ورود به کلاس</span>
              </Link>

              <span id="modares">{i.teacher}</span>
              <span id="zirgroup">{i.zirgroup}</span>
              <span id="dars">{i.lesson}</span>
              <span id="term">{i.term}</span>
              <span id="markaz">{i.center}</span>
              <span id="shenase">{i.id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
