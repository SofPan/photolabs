import {React, useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    hasFavourite,
    selectTopic,
    dispatchState,
    isLoaded
  } = props;

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        hasFavourite={hasFavourite}
        selectTopic={selectTopic}
        dispatchState={dispatchState}

      />
      <PhotoList 
        photos={photos} 
        dispatchState={dispatchState}
        isLoaded={isLoaded}
      />
    </div>
  );
};

export default HomeRoute;
