import {React, useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    hasFavourite,
    dispatchState,
    checkIfPhotoIsFavourite
  } = props;

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        hasFavourite={hasFavourite}
        // favourites={favourites}
        dispatchState={dispatchState}

      />
      <PhotoList 
        photos={photos} 
        dispatchState={dispatchState}
        checkIfPhotoIsFavourite={checkIfPhotoIsFavourite}
      />
    </div>
  );
};

export default HomeRoute;
