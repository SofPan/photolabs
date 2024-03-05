import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const {
    topics,
    selectTopic,
    hasFavourite,
    dispatchState
  } = props;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList 
          topics={topics} 
          selectTopic={selectTopic}
          dispatchState={dispatchState}

        />
        <FavBadge 
          selected={hasFavourite} 
          // isFavPhotoExist={hasFavourite}
        />
      </div>
    </div>
  )
}

export default TopNavigation;