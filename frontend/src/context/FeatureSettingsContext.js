import { createContext, useContext, useState } from "react";

const FeatureSettingsContext = createContext();

const defaultSettings = {
  showEvents: false,
  showBuySellRent: false,
  showEquipmentBooking: false,
  showNearbyStudentDeals: false,
};

export function FeatureSettingsProvider({ children }) {
  const [featureSettings, setFeatureSettings] = useState(defaultSettings);

  return (
    <FeatureSettingsContext.Provider value={{ featureSettings, setFeatureSettings }}>
      {children}
    </FeatureSettingsContext.Provider>
  );
}

export function useFeatureSettings() {
  return useContext(FeatureSettingsContext);
}