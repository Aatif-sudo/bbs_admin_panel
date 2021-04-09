import React from "react";
import "./Sidebar.scss";
import { GoDashboard, GoSignIn } from "react-icons/go";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <a target="_blank" href="https://www.evnorg.com/">
          <h1>EvnOrg</h1>
        </a>
      </div>
      <ul className="sidebar_links">
        <li className="sidebar_item">
          <a href="#">
            <GoDashboard className="svg" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="sidebar_item">
          <a href="#">
            <GoSignIn className="svg" />
            <span>Admission</span>
          </a>
        </li>
        <li className="sidebar_item">
          <a href="#">
            <RiAdvertisementFill className="svg" />
            <span>Advertise</span>
          </a>
        </li>
        <li className="sidebar_item">
          <a href="#">
            <FaUserAlt className="svg" />
            <span>Student's Data</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
