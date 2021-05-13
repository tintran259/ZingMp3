// libs
import React from "react";

// components
import WapperContent from "./mains/WapperContent";
import WapperSidebar from "./mains/WapperSidebar";

// style
import "./style.scss";

export default function HomePage() {
  return (
    <div className="wapper-page">
      <WapperContent />
      <WapperSidebar />
    </div>
  );
}
