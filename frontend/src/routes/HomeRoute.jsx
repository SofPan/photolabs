import {React, useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, toggleModal} = props;
    // Globally track favourited photos
    const [hasFavourite, setHasFavourite] = useState(false);
  
    const favouriteChecker = (isFavourite = false) => {
      if (isFavourite){
        setHasFavourite(true);
      } else {
        setHasFavourite(false);
      }
    }
  return (
    <div className="home-route">
      <TopNavigation topics={topics} hasFavourite={hasFavourite}/>
      <PhotoList photos={photos} favouriteChecker={favouriteChecker} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomeRoute;
