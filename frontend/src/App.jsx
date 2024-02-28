import {React, useState} from 'react';


import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Globally track favourited photos
  const [hasFavourite, setHasFavourite] = useState(false);
  
  const favouriteChecker = (isFavourite = false) => {
    if (isFavourite){
      setHasFavourite(true);
    } else {
      setHasFavourite(false);
    }
  }
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favouriteChecker={favouriteChecker} hasFavourite={hasFavourite}/>
    </div>
  );
};

export default App;
