import React from "react";
import "./changepassword.css";

export default function ChangePassword() {
  return (
    <div className="change-pass">
      <div className="change-pass-shadow">
        <div className="change-pass-box">
          <div className="change-pass-title">
            <span>
              کلمه عبور جدید باید حداقل 8 کاراکتر باشد و حتما شامل حرف کوچک ،
              حرف بزرگ و عدد باشد . بهتر است از کاراکترهای ویژه هم استفاده شود .
              رمز عبور قدرتمند به امنیت اطلاعات شما کمک می کند
            </span>
          </div>
          <div className='change-pass-form'>
              <form id='pass-form'>
                <label>کلمه عبور فعلی</label>
                <input type='password'/>
                <label>کلمه عبور جدید</label>
                <input type='password'/>
                <label>تکرار کلمه عبور جدید</label>
                <input type='password'/>
                <br/>
                <button>به روز رسانی رمز عبور</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}
