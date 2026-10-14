import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../css/SettingsPage.css";

function SettingsPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="page">
      <h3>Innstillinger</h3>

      <div className="settings-profile">
        <div className="settings-avatar">
          {currentUser.name.charAt(0)}
        </div>
        <p className="settings-room">Rom {currentUser.roomNumber}</p>
      </div>

      <div className="settings-info">
        <div className="settings-info-row">
          <span className="settings-info-label">Navn</span>
          <span className="settings-info-value">{currentUser.name}</span>
        </div>
        <div className="settings-info-row">
          <span className="settings-info-label">Brukernavn</span>
          <span className="settings-info-value">{currentUser.username}</span>
        </div>
      </div>

      <div className="settings-actions">
        <button
          className="settings-action-button"
          onClick={() => navigate("/onboarding")}
        >
          Endre funksjonalitet
        </button>

        <button className="settings-action-button logout" onClick={handleLogout}>
          Logg ut
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;