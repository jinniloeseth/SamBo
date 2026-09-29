import sammenLogo from "../assets/icons/sammen_logo.png";
import "./css/TopBar.css";

// Mock-verdi til vi kobler på ekte backend-data
const currentLocation = "Brann stadion";

function TopBar() {
  return (
    <header className="top-bar">
      <img src={sammenLogo} alt="Sammen" className="top-bar-logo" />
      <span className="top-bar-location">{currentLocation}</span>
    </header>
  );
}

export default TopBar;