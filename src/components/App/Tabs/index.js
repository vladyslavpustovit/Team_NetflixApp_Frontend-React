import React,{useState} from 'react';
import Tabs from './Tab';

const TabComponent = () => {
  const[activeTab,setActiveTab]=useState("CANCEL_AT_ANY_TIME");
  const onClickTab = (tab) =>{
    setActiveTab(tab);
  }
  return (
    <div>
      <Tabs activeTabName={activeTab} onClickTab={onClickTab}/>
    </div>
  )
}

export default TabComponent;