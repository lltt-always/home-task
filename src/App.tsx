import React from "react";

import AppHeader from "./components/AppHeader/AppHeader";
import AppLeftSider1 from "./components/AppLeftSider1/AppLeftSider1";
import AppLeftSider2 from "./components/AppLeftSider2/AppLeftSider2";
import AppRightSider from "./components/AppRightSider/AppRightSider";
import AppContent from "./components/AppContent/AppContent";
import AppFooter from "./components/AppFooter/AppFooter";
import "./App.css";

export default function App() {
  const changeTheme = () => {
    const themeLink = document.getElementById('theme-link') as HTMLAnchorElement;
    if (themeLink) {
      themeLink.href.includes('green') ? (themeLink.href = 'theme-blue.css') : (themeLink.href = 'theme-green.css');
    }
  }
  return (
    <div className="app container">
      <div className="header">
        <AppHeader />
      </div>
      <div className="section">
        <div className="sider">
          <div className="part">
            <AppLeftSider1 />
          </div>
          <div className="part">
            <AppLeftSider2 />
          </div>
        </div>
        <div className="content">
          <AppContent />
        </div>
        <div className="sider">
          <AppRightSider />
        </div>
      </div>
      <AppFooter
        changeTheme={changeTheme}
      />
    </div>
  );
}
