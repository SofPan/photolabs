import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const {
    topics,
    hasFavourite,
    dispatchState
  } = props;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList 
          topics={topics} 
          dispatchState={dispatchState}
        />
        <FavBadge 
          selected={true}
          displayAlert={hasFavourite} 
        />
      </div>
    </div>
  )
}

export default TopNavigation;