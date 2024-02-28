import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic}) => {
  return (
    <div key={topic.id} className="topic-list__item">
      <span id={topic.slug}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
