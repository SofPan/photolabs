import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    photos, 
    dispatchState,
    favourites
  } = props;

  return (
    <ul className="photo-list">
      {
        photos.map(photo => 
          <PhotoListItem 
            key={photo.id}
            photo={photo} 
            dispatchState={dispatchState}
            favourites={favourites}
          />
        )
      }
    </ul>
  );
};

export default PhotoList;
