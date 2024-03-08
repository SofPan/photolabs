import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    photo, 
    dispatchState,
    isLoaded
  } = props;

  const handleModalClick = (e) => {
    const stateObject = {
      type: "open",
      payload: photo
    }
    dispatchState(stateObject);
  }

  const toggleFavouritePhoto = (favourite) => {
    const stateObject = {
      type: favourite ? "add" : "remove",
      payload: photo
    }
    dispatchState(stateObject);
  }

  return(
    <article  className={`photo-list__item ${!isLoaded && "photo-list__item-loading"}`} key={photo.id} >
      <img id={photo.id} className="photo-list__image" src={photo.urls.regular} onClick={handleModalClick}/>
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={photo.user.profile} />
      <div className="photo-list__user-info">
        <figcaption >{photo.user.username}</figcaption>
        <address className="photo-list__user-location">{photo.location.city}, {photo.location.country}</address>
      </div>
      <PhotoFavButton toggleFavouritePhoto={toggleFavouritePhoto}/>
      </div>
    </article>
  )
};

export default PhotoListItem;
