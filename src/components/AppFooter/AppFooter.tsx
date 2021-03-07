import React from "react";
import "./AppFooter.css";

interface FooterProps {
  changeTheme: Function,
}

function AppFooter(props: FooterProps) {
  return (
    <div className="app-footer">
      <div className="click-button" onClick={() => { props.changeTheme() }}>Click here!</div>
    </div>
  );
}

export default AppFooter;
