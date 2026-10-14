import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./../css/FeatureSettingsPage.css";

const availableFeatures = [
  { key: "showEvents", label: "Arrangement" },
  { key: "showBuySellRent", label: "Kjøp, salg og leie" },
  { key: "showEquipmentBooking", label: "Redskap booking" },
  { key: "showNearbyStudentDeals", label: "Studenttilbud i nærheten" },
];

const emptySettings = {
  showEvents: false,
  showBuySellRent: false,
  showEquipmentBooking: false,
  showNearbyStudentDeals: false,
};

function FeatureSettingsPage() {
  const { currentUser, updateFeatureSettings } = useAuth();
  const navigate = useNavigate();

  const [selections, setSelections] = useState(
    currentUser.featureSettings || emptySettings
  );

  function toggleFeature(key) {
    setSelections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function handleSave() {
    updateFeatureSettings(selections);
    navigate("/");
  }

  return (
    <div className="page">
      <h1>Velg funksjoner</h1>
      <p className="feature-subtitle">
        Hvilke av disse vil du ha tilgang til i appen?
      </p>

      <div className="feature-list">
        {availableFeatures.map((feature) => (
          <label key={feature.key} className="feature-row">
            <span>{feature.label}</span>
            <input
              type="checkbox"
              checked={selections[feature.key]}
              onChange={() => toggleFeature(feature.key)}
            />
          </label>
        ))}
      </div>

      <button className="feature-save-button" onClick={handleSave}>
        Lagre
      </button>
    </div>
  );
}

export default FeatureSettingsPage;