import React, { useState } from "react";
import { Link } from "react-router-dom";
import TabContent from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faTabletScreenButton,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import "./Tabs.css";




const Tabs = ({ activeTabName = "CANCEL_AT_ANY_TIME", onClickTab }) => {
  const RenderTabTitle = ({ tabTitle, icon, id }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <>
        <div
          onClick={() => {
            onClickTab(tabTitle);
          }}
          id={id}
          className={`tab-item ${activeTabName === tabTitle && "tab-border"}`}
        >
          <i className={icon}></i>
          <div>
            <p>{tabTitle}</p>
            {console.log(activeTabName, tabTitle)}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section className="tabs">
        <div className="container">
          <RenderTabTitle
            tabTitle="CANCEL_AT_ANY_TIME"
            icon={"fas fa-door-open fa-3x"}
            id={"tab-1"}
          />
          <RenderTabTitle
            tabTitle="WATCH_ANYWHERE"
            icon={"fas fa-tablet-alt fa-3x"}
            id={"tab-2"}
          />
          <RenderTabTitle
            tabTitle="PICK_YOUR_PRICE"
            icon={"fas fa-tags fa-3x"}
            id={"tab-3"}
          />
        </div>
      </section>
      <TabContent activeTabName={activeTabName} />
    </>
  );
};

export default Tabs;
