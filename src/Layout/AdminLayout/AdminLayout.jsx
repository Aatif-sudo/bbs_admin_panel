import React from "react";
import "./AdminLayout.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MainContent from "../../Components/MainContent/MainContent";
import Footer from "../../Components/Footer/Footer";

function AdminLayout() {
  return (
    <div className="app">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="wrapper">
        <Navbar icon="😄" />
        <div className="c-body">
          <MainContent /> //andar show hone wale sare pages yaha map karayenge
          i.e main content ke andar
        </div>
        <Footer />
        footer
      </div>
    </div>
  );
}

export default AdminLayout;
