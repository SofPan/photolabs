import {React, useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    openModal,
    hasFavourite,
    selectTopic,
    dispatchState
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
        openModal={openModal}
        dispatchState={dispatchState}

      />
    </div>
  );
};

export default HomeRoute;
