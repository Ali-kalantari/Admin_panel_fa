import React from "react";
import "./online.css";
import onlineclassdata from "../../Data";

export default function Onlineclass() {
  return (
    <div className="online">
      <div className="online-shadow">
        <div className="online-box">
          <div className="online-title">
            <span>
              {" "}
              جلسات آنلاین یک هفته پیش رو در این صفحه قابل مشاهده است{" "}
            </span>
          </div>
          <div className="online-table">
            <table id="table">
              <thead>
                <tr>
                  <th>مدرس</th>
                  <th>زیر گروه</th>
                  <th>درس</th>
                  <th>مرکز</th>
                  <th>تاریخ پایان</th>
                  <th>تاریخ شروع</th>
                  <th>عنوان</th>
                </tr>
              </thead>
              <tbody>
                {onlineclassdata.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.teacher}</td>
                        <td>{item.zirgroup}</td>
                        <td>{item.lesson}</td>
                        <td>{item.center}</td>
                        <td>{item.finish}</td>
                        <td>{item.begin}</td>
                        <td>{item.subject}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
