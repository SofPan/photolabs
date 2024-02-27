import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3);
  
  for (let i = 0; i < photos.length; i++){
    photos[i] = {...sampleDataForPhotoListItem};
    photos[i].id = i + 1;
  }
  return (
    <div className="App">
      {
        photos.map(photo => 
          <PhotoListItem key={photo.id} imageData={sampleDataForPhotoListItem}/>
        )
      }

    </div>
  );
};

export default App;
