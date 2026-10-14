import { Outlet, Navigate } from "react-router-dom";
import BottomNav from "../BottomPages/BottomNav";
import TopBar from "./TopBar";
import { useAuth } from "../../context/AuthContext";


function Layout() {
  const { currentUser } = useAuth();

  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!currentUser.featureSettings) {
    return <Navigate to="/feature-settings" />;
  }

  return (
    <div className="app-layout">
      <TopBar />
      <main className="page-content">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}

export default Layout;