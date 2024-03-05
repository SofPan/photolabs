import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, topicClick}) => {
  return (
    <div onClick={topicClick} key={topic.id} id={topic.id} className="topic-list__item">
      <span id={topic.slug}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
