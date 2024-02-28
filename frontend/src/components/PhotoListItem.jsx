import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = ({photo, countFavourites}) => {

  return(
    <article className="photo-list__item" key={photo.id}>
      <img className="photo-list__image" src={photo.urls.regular} />
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={photo.user.profile} />
      <div className="photo-list__user-info">
        <figcaption >{photo.user.username}</figcaption>
        <address className="photo-list__user-location">{photo.location.city}, {photo.location.country}</address>
      </div>
      <PhotoFavButton countFavourites={countFavourites}/>
      </div>
    </article>
  )
};

export default PhotoListItem;
