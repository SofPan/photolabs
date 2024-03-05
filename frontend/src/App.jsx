import {React} from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    dispatchState,
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
        openModal={openModal}
        selectTopic={selectTopic}
        dispatchState={dispatchState}
      />
      {
        state.modal && 
        <PhotoDetailsModal 
          closeModal={closeModal} 
          modalDetails={state.modal}
          photos={state.photoData}
          dispatchState={dispatchState}
        />
      }
    </div>
  );
};

export default App;
