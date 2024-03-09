import {React} from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    dispatchState,
    state,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photoData}
        topics={state.topicData}
        // if there is a favourite, show notification badge 
        hasFavourite={state.favouriteData.length > 0}
        favourites={state.favouriteData}
        dispatchState={dispatchState}
      />
      {
        state.modal && 
        <PhotoDetailsModal 
          modalDetails={state.modal}
          photos={state.photoData}
          dispatchState={dispatchState}
          favourites={state.favouriteData}
        />
      }
    </div>
  );
};

export default App;
