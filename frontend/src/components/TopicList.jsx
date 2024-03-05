import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, selectTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {
        topics.map(topic => 
          <TopicListItem 
            key={topic.id} 
            topic={topic} 
            selectTopic={selectTopic}
          />
        )
      }
    </div>
  );
};

export default TopicList;
