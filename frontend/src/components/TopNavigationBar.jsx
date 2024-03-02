import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({topics, hasFavourite}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
      <TopicList topics={topics}/>
      <FavBadge 
        selected={hasFavourite} 
        isFavPhotoExist={hasFavourite}
      />
      </div>
    </div>
  )
}

export default TopNavigation;