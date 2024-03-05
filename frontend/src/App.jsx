import {React} from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    addFavourite,
    removeFavourite,
    state,
    openModal,
    closeModal,
    selectTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photoData}
        topics={state.topicData}
        // if there is a favourite, show notification badge 
        hasFavourite={state.favouriteData.length > 0}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        openModal={openModal}
        selectTopic={selectTopic}
      />
      {
        state.modal && 
        <PhotoDetailsModal 
          closeModal={closeModal} 
          modalDetails={state.modal}
          photos={state.photoData}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      }
    </div>
  );
};

export default App;
