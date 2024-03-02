import {React, useState} from 'react';


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    addFavourite,
    removeFavourite,
    favouriteArray,
    toggleModal,
    displayModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        toggleModal={toggleModal}
        hasFavourite={favouriteArray.length > 0}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
      />
      {
        displayModal && 
        <PhotoDetailsModal 
          toggleModal={toggleModal} 
          modalDetails={modalDetails}
          photos={photos}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      }
    </div>
  );
};

export default App;
