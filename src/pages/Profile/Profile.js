import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="two-step-enter">فعال کردن ورود دو مرحله ای</div>
      <div className="profile-box">
        <form className="profile-form">
          <label>نام کاربری</label>
          <input id="user-id" type="text" placeholder="9700236598" />
          <div className="user-info-container">
            <div className="user-firstname-container">
              <label>نام خانوادگی</label>
              <input id="user-lastname" type="text" placeholder="کلانتری" />
            </div>
            <div className="user-lastname-container">
              <label>نام</label>
              <input id="user-firstname" type="text" placeholder="علی" />
            </div>
          </div>
          {/*  */}
          <div className="user-info-container">
            <div className="user-lastname-container">
              <label>جنسیت</label>
              <select id="user-gender" type="text" placeholder="علی">
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>
            <div className="user-firstname-container">
              <label>کد ملی</label>
              <input id="user-nationalcode" type="text" placeholder="کلانتری" />
            </div>
          </div>
          {/*  */}
          <div className="user-info-container">
            <div className="user-firstname-container">
              <label>ایمیل </label>
              <input
                id="user-email"
                type="text"
                placeholder="alikalantari7777@gmail.com"
              />
            </div>
            <div className="user-lastname-container">
              <label>شماره تلفن</label>
              <input id="user-phone" type="text" placeholder="09373834352" />
            </div>
          </div>
          <button className="profile-btn">ذخیره تغییرات</button>
        </form>
      </div>
    </div>
  );
}
