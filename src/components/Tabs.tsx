import React, { useState } from "react";

interface Tab {
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  setActiveTab: (tab: string) => void;
  className?: string,
}

const Tabs: React.FC<TabsProps> = ({ tabs, setActiveTab, className }) => {
  const [activeTab, setActiveTabState] = useState(tabs[0].label);

  const handleTabClick = (tabLabel: string) => {
    setActiveTabState(tabLabel);
    setActiveTab(tabLabel);
  };

  return (
    <div className={`flex space-x-2 bg-[#E7E3C6] p-2 rounded-full ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => handleTabClick(tab.label)}
          className={`flex-1 py-2 rounded-full transition-colors duration-300 ${
            activeTab === tab.label
              ? "bg-[#217C70] text-white"
              : "bg-white text-black"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
