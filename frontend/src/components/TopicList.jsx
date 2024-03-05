import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {
    topics, 
    dispatchState
  } = props;
  
  return (
    <div className="top-nav-bar__topic-list">
      {
        topics.map(topic => 
          <TopicListItem 
            key={topic.id} 
            topic={topic} 
            dispatchState={dispatchState}
          />
        )
      }
    </div>
  );
};

export default TopicList;
