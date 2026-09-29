import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/icons/home_icon.png";
import announcementIcon from "../../assets/icons/announcement_icon.png";
import appwashIcon from "../../assets/icons/washingmachine_icon.png";
import settingsIcon from "../../assets/icons/settings_icon.png";
import "../css/BottomNav.css";

const navItems = [
  { path: "/", label: "Hjem", icon: homeIcon },
  { path: "/announcements", label: "Kunngjøringer", icon: announcementIcon },
  { path: "/appwash", label: "appWash", icon: appwashIcon },
  { path: "/settings", label: "Innstillinger", icon: settingsIcon },
];

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src={item.icon} alt={item.label} className="nav-icon" />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;