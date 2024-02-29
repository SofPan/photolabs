import {React, useState} from 'react';


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  // Globally track favourited photos
  const [hasFavourite, setHasFavourite] = useState(false);
  // Modal state
  const [displayModal, setDisplayModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  
  // Check if image is a favourite
  const favouriteChecker = (isFavourite = false) => {
    if (isFavourite){
      setHasFavourite(true);
    } else {
      setHasFavourite(false);
    }
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
      />
      {
        displayModal && 
        <PhotoDetailsModal 
          toggleModal={toggleModal} 
          modalDetails={modalDetails}
          photos={photos}
          hasFavourite={hasFavourite}
        />
      }
    </div>
  );
};

export default App;
