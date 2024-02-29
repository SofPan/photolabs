import {React, useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, toggleModal, hasFavourite, favouriteChecker} = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} hasFavourite={hasFavourite}/>
      <PhotoList photos={photos} favouriteChecker={favouriteChecker} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomeRoute;
