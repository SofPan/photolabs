import {React, useState} from 'react';


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  // Globally track favourited photos
  const [hasFavourite, setHasFavourite] = useState(false);
  const [favouriteArray, setFavouriteArray] = useState([]);
  // Modal state
  const [displayModal, setDisplayModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  
  // Check if there are favourites
  const favouriteChecker = (isFavourite = false) => {
    if (isFavourite){
      setHasFavourite(true);
    } else {
      setHasFavourite(false);
    }
  }

  // add new favourite to array
  const pushToFavourites = (favouritePhoto) => {
    const favouritePhotoArray = [...favouriteArray, favouritePhoto]
    setFavouriteArray(favouritePhotoArray);
    favouriteChecker(true);
  }
  // remove un-favourited item from array and check length
  const removeFromFavourites = (photoToRemove) => {
    const filteredPhotoArray = favouriteArray.filter(photo => photo.id != photoToRemove.id);
    setFavouriteArray(filteredPhotoArray);
    // if no array items remain, favourites notification should clear
    filteredPhotoArray.length === 0 && favouriteChecker(false);
  }

  // Show or hide modal
  const toggleModal = (id) => {
    const isDisplayed = !displayModal;
    setDisplayModal(isDisplayed);

    if (isDisplayed){
      const currentPhoto = photos.filter(photo => photo.id === id)[0];
      setModalDetails({
        urls: currentPhoto.urls,
        user: currentPhoto.user,
        location: currentPhoto.location
      });
    }
  }
  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        toggleModal={toggleModal}
        favouriteChecker={favouriteChecker}
        hasFavourite={hasFavourite}
        pushToFavourites={pushToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
      {
        displayModal && 
        <PhotoDetailsModal 
          toggleModal={toggleModal} 
          modalDetails={modalDetails}
          photos={photos}
          pushToFavourites={pushToFavourites}
          removeFromFavourites={removeFromFavourites}
        />
      }
    </div>
  );
};

export default App;
