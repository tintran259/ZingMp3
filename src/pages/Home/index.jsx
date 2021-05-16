// libs
import React from "react";

// components
import WapperContent from "./mains/WapperContent";
import WapperSidebar from "./mains/WapperSidebar";
import WapperPartner from "./mains/WapperPartner";

// style
import "./style.scss";

export default function HomePage() {
  return (
    <div className="wapper-page">
      <WapperContent />
      <WapperSidebar />
      <WapperPartner />
    </div>
  );
}
