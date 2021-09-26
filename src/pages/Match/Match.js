import React from "react";
import "./Match.css";

export default function Match() {
  return (
    <div className="match">
      <div className="match-shadow">
        <div className="match-box">
          <div className="match-title">
            <span>
              اگر قبل از ساعت شروع ازمون وارد این صفحه شده اید با فرا رسیدن ساعت
              ازمون لازم است صفحه را رفرش کنید
            </span>
            <span>
              پس از پایان آزمون از صفحه کلاسها پیگیر نتیجه آزمون باشید
            </span>
          </div>
          <div className="match-table">
            <table id="table">
              <thead>
                <tr>
                  <th>مدرس</th>
                  <th>زیر گروه</th>
                  <th>درس</th>
                  <th>مرکز</th>
                  <th>زمان(دقیقه)</th>
                  <th>تاریخ پایان</th>
                  <th>تاریخ شروع</th>
                  <th>عنوان</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
