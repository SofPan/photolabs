import {React} from 'react';


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// import topics from 'mocks/topics';

const App = () => {
  const {
    addFavourite,
    removeFavourite,
    favouriteArray,
    modal,
    openModal,
    closeModal,
    photoData,
    topicData
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData}
        topics={topicData} 
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
          photos={photoData}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      }
    </div>
  );
};

export default App;
