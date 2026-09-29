import { Outlet } from "react-router-dom";
import BottomNav from "./BottomPages/BottomNav";
import TopBar from "./TopBar";

function Layout() {
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