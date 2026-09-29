import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/BottomPages/HomePage";
import AnnouncementPage from "./components/BottomPages/AnnouncementPage";
import AppWashPage from "./components/BottomPages/AppWashPage";
import SettingsPage from "./components/BottomPages/SettingsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="announcements" element={<AnnouncementPage />} />
          <Route path="appwash" element={<AppWashPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;