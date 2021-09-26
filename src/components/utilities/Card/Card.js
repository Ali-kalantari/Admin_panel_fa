import React from "react";
import "./card.css";
import { FiAirplay } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <Link to="/">
      <div className="card">
        <div className="card-title-holder">
          <div className={props.des ? "card-top-title" : "card-top-title full"}>
            {props.title}
          </div>
          <div className="card-bottom-title">{props.des}</div>
        </div>
        <div className="card-icon-holder">
          <span>{props.icon}</span>
        </div>
      </div>
    </Link>
  );
}
