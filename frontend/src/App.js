import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Pages/Layout";
import HomePage from "./components/BottomPages/HomePage";
import AnnouncementPage from "./components/BottomPages/AnnouncementPage";
import AppWashPage from "./components/BottomPages/AppWashPage";
import SettingsPage from "./components/BottomPages/SettingsPage";
import LoginPage from "./components/Pages/LoginPage";
import FeatureSettingsPage from "./components/Pages/FeatureSettingsPage";
import "./App.css";
import PlaceholderPage from "./components/Pages/PlaceHolderPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feature-settings" element={<FeatureSettingsPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="announcements" element={<AnnouncementPage />} />
            <Route path="appwash" element={<AppWashPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="info" element={<PlaceholderPage />} />
            <Route path="contact" element={<PlaceholderPage />} />
            <Route path="events" element={<PlaceholderPage />} />
            <Route path="marketplace" element={<PlaceholderPage />} />
            <Route path="equipment" element={<PlaceholderPage />} />
            <Route path="deals" element={<PlaceholderPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;