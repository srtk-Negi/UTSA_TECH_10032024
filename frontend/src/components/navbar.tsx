import { NavLink } from "react-router-dom";
import "../assets/navbar.css";

function NavElements() {
  const items = [
    {
      label: "Home",
      href: "/events",
    },
  ];

  return (
    <ul className="menu">
      {items.map((item, index) => (
        <li key={index}>
          <NavLink to={item.href} className="nav-element">
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const logo = <div className="logo">TRAIL BLAZERS</div>;

  return (
    <div id="header">
      {logo}
      <NavElements />
    </div>
  );
}
