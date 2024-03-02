import {React} from 'react';


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
    modal,
    openModal,
    closeModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        hasFavourite={favouriteArray.length > 0}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        openModal={openModal}
      />
      {
        modal && 
        <PhotoDetailsModal 
          closeModal={closeModal} 
          modalDetails={modal}
          photos={photos}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      }
    </div>
  );
};

export default App;
