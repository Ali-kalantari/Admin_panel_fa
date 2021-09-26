import React from "react";
import "./dashboard.css";
import Card from "./../../components/utilities/Card/Card";

import { FiAirplay } from "react-icons/fi";
import { MdDescription } from "react-icons/md";
import { AiOutlineBell, AiOutlinePieChart } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { BiTask } from "react-icons/bi";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card-wrapper">
        <Card
          icon={<AiOutlinePieChart />}
          des="ارزیابی های پیش رو"
          title="ارزیابی ها"
        />
        <Card
          icon={<BsMic />}
          des="جلسات آنلاین یک هفته آینده"
          title="جلسات آنلاین"
        />
        <Card icon={<FiAirplay />} des="" title="کلاس ها" />
        <Card icon={<AiOutlineBell />} des="" title="صندوق پیام ها" />
        <Card icon={<MdDescription />} des="" title="مدارک" />
        <Card icon={<BiTask />} des="آزمون های پیش رو" title="آزمون ها" />
      </div>
    </div>
  );
}
