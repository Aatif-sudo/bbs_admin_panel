import React, { useState } from "react";
import "./Navbar.scss";
import { CSSTransition } from "react-transition-group";
import {
  FaBell,
  FaPlus,
  FaUser,
  FaCaretDown,
  FaCogs,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
function Navbar(props) {
  const [open, setOpen] = useState(false);

  function NavItem(props) {
    return (
      <li className="nav_item">
        <a href="#" className="icon_button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    );
  }

  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
      console.log(el);
    }
    console.log(menuHeight);
    function DropdownItem(props) {
      return (
        <a
          href="#"
          className="menu_item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon_button">{props.leftIcon}</span>
          {props.children}
          <span className="icon_right">{props.rightIcon}</span>
        </a>
      );
    }
    return (
      <div className="dropdown" style={{ height: menuHeight }}>
        <CSSTransition
          in={activeMenu === "main"}
          unmountOnExit
          timeout={500}
          classNames="menu-primary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropdownItem leftIcon={<FaUser />}>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<FaCogs />}
              rightIcon={<FaChevronRight />}
              goToMenu="settings"
            >
              Settings
            </DropdownItem>
            <DropdownItem
              leftIcon={<FaCogs />}
              rightIcon={<FaChevronRight />}
              goToMenu="settings"
            >
              onemore
            </DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "settings"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropdownItem
              leftIcon={<FaChevronLeft />}
              goToMenu="main"
            ></DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
            <DropdownItem leftIcon={<FaCogs />}>Settings</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  return (
    <nav className="navbar">
      <ul className="navbar_nav">
        {/* <NavItem icon="🦓" /> */}
        <NavItem icon={<FaPlus />} />
        <NavItem icon={<FaBell />} />
        <NavItem icon={<FaUser />}> </NavItem>
        <NavItem icon={<FaCaretDown />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
}

export default Navbar;
