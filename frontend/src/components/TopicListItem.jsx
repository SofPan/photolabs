import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {
    topic, 
    dispatchState 
  } = props;
  
  const handleTopicClick = (e) => {
    const stateObject = {
      type: "filter_topic",
      payload: e.target.parentNode.id
    }
    dispatchState(stateObject);
  }
  return (
    <div 
      onClick={handleTopicClick} 
      key={topic.id} 
      id={topic.id} 
      className="topic-list__item"
    >
      <span id={topic.slug}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
