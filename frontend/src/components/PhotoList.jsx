import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    photos, 
    openModal,
    dispatchState
  } = props;
  
  return (
    <ul className="photo-list">
      {
        photos.map(photo => 
          <PhotoListItem 
            key={photo.id}
            photo={photo} 
            openModal={openModal}
            dispatchState={dispatchState}
          />
        )
      }
    </ul>
  );
};

export default PhotoList;
