import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faTabletScreenButton,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import TabContent from "./Tab-content";

function Tab() {
  const [toggleState, setToggleState] = useState(1);
  function toggleTab(id) {
    setToggleState(id);
    console.log(id);
  }
  return (
    <div>
      <section className="tabs h-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 border-4 border-black">
        <div className="container grid grid-cols-3 gap-4 items-center justify-center text-center ">
          <div
            className="tab-item active-tab tab-border border-b-4 border-primary-color p-8"
            onClick={() => toggleTab(1)}
          >
            <FontAwesomeIcon icon={faDoorOpen} className="h-20 " />
            <p className="hide-sm ">Cancel at any time</p>
          </div>

          <div className="tab-item" onClick={() => toggleTab(2)}>
            <FontAwesomeIcon icon={faTabletScreenButton} className="h-20" />
            <p className="hide-sm">Watch anywhere</p>
          </div>

          <div className="tab-item" onClick={() => toggleTab(3)}>
            <FontAwesomeIcon icon={faTags} className="h-20" />
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
        <TabContent data={toggleState} />
      </section>
    </div>
  );
}

export default Tab;
