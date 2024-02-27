import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3);
  
  // for (let i = 0; i < photos.length; i++){
  //   photos[i] = {...sampleDataForPhotoListItem};
  //   photos[i].id = i + 1;
  // }
  return (
    <div className="App">
      {/* {
        photos.map(photo => 
          <PhotoListItem key={photo.id} imageData={photo}/>
        )
      } */}
      <PhotoList />
    </div>
  );
};

export default App;
