import {React, useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    openModal,
    addFavourite,
    removeFavourite,
    hasFavourite,
    topicClick
  } = props;

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        hasFavourite={hasFavourite}
        topicClick={topicClick}
      />
      <PhotoList 
        photos={photos} 
        openModal={openModal}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
      />
    </div>
  );
};

export default HomeRoute;
