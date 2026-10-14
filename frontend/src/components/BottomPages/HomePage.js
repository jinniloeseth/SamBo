import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../css/HomePage.css";

const fixedItems = [
  { label: "Informasjon", path: "/info", icon: "ℹ️" },
  { label: "Kontakt oss", path: "/contact", icon: "✉️" },
];

const optionalItems = [
  { key: "showEvents", label: "Arrangement", path: "/events", icon: "📅" },
  { key: "showBuySellRent", label: "Kjøp, salg og leie", path: "/marketplace", icon: "🏷️" },
  { key: "showEquipmentBooking", label: "Redskap booking", path: "/equipment", icon: "🔧" },
  { key: "showNearbyStudentDeals", label: "Studenttilbud", path: "/deals", icon: "🎓" },
];

function HomePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const activeItems = [
    ...fixedItems,
    ...optionalItems.filter((item) => currentUser.featureSettings[item.key]),
  ];

  return (
    <div className="page home-page">
      <div className="home-greeting">
        <h2>Hei, {currentUser.name.split(" ")[0]}!</h2>
        <p>Rom {currentUser.roomNumber}</p>
      </div>

      <div className="menu-grid">
        {activeItems.map((item) => (
          <button
            key={item.path}
            className="menu-card"
            onClick={() => navigate(item.path)}
          >
            <span className="menu-card-icon">{item.icon}</span>
            <span className="menu-card-label">{item.label}</span>
          </button>
        ))}
      </div>

      <button
        className="home-edit-button"
        onClick={() => navigate("/feature-settings")}
      >
        Rediger menyvalg
      </button>
    </div>
  );
}

export default HomePage;