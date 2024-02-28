import {React, useState} from 'react';


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const toggleModal = (id) => {
    const isDisplayed = !displayModal;
    setDisplayModal(isDisplayed);

    if (isDisplayed){
      const photo = photos[id];
      setModalDetails({
        full: photo.urls.full,
        user: photo.user,
        location: photo.location
      });
    }
  }
  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        toggleModal={toggleModal}
      />
      {
        displayModal && 
        <PhotoDetailsModal 
          toggleModal={toggleModal} 
          modalDetails={modalDetails}
        />
      }
    </div>
  );
};

export default App;
