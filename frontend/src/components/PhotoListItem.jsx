import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    photo, 
    dispatchState,
    checkIfPhotoIsFavourite
  } = props;

  // pass modal state back to useApplicationData
  const handleModalClick = () => {
    const stateObject = {
      type: "open",
      payload: photo
    }
    dispatchState(stateObject);
  }

  // pass favourite state back to useApplicationData
  const toggleFavouritePhoto = (favourite) => {
    const stateObject = {
      type: favourite ? "add" : "remove",
      payload: photo
    }
    dispatchState(stateObject);
  }

  const photoIsFavourite = checkIfPhotoIsFavourite(photo);

  return(
    <article  className="photo-list__item" key={photo.id} >
      <PhotoFavButton toggleFavouritePhoto={toggleFavouritePhoto} isSelected={photoIsFavourite}/>
      <img id={photo.id} className="photo-list__image" src={photo.urls.regular} onClick={handleModalClick}/>
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={photo.user.profile} />
      <div className="photo-list__user-info">
        <figcaption >{photo.user.username}</figcaption>
        <address className="photo-list__user-location">{photo.location.city}, {photo.location.country}</address>
      </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
