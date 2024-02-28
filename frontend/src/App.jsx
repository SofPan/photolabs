import {React, useState} from 'react';


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const showOrHideModal = () => {
    setDisplayModal(!displayModal);
  }
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} showOrHideModal={showOrHideModal}/>
      {displayModal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
