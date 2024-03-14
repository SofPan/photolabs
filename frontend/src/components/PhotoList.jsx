import {React} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    photos, 
    dispatchState,
    checkIfPhotoIsFavourite
  } = props;

  return (
    <ul className="photo-list">
      {
        photos.map(photo => 
          <PhotoListItem 
            key={photo.id}
            photo={photo} 
            dispatchState={dispatchState}
            checkIfPhotoIsFavourite={checkIfPhotoIsFavourite}
          />
        )
      }
    </ul>
  );
};

export default PhotoList;
