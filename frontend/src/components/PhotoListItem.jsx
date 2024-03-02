import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {photo, openModal, addFavourite, removeFavourite} = props;
  const handleModalClick = (e) => {
    openModal(photo);
  }
  const getFavouritePhotoId = (favourite) => {
    favourite ? addFavourite(photo) : removeFavourite(photo);
  }
  return(
    <article  className="photo-list__item" key={photo.id} >
      <img id={photo.id} className="photo-list__image" src={photo.urls.regular} onClick={handleModalClick}/>
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={photo.user.profile} />
      <div className="photo-list__user-info">
        <figcaption >{photo.user.username}</figcaption>
        <address className="photo-list__user-location">{photo.location.city}, {photo.location.country}</address>
      </div>
      <PhotoFavButton getFavouritePhotoId={getFavouritePhotoId}/>
      </div>
    </article>
  )
};

export default PhotoListItem;
