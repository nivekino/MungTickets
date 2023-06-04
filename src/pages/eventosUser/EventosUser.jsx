import React, { useState } from "react";

const EventosUser = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
      </div>

      {activeTab === 1 && (
        <div className="tab-content">
          <h2>Contenido de la pestaña 1</h2>
        </div>
      )}
      {activeTab === 2 && (
        <div className="tab-content">
          <h2>Contenido de la pestaña 2</h2>
        </div>
      )}
    </>
  );
};

export default EventosUser;