import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = ({imageData}) => {

  return(
    <article className="photo-list__item" key={imageData.id}>
      <img className="photo-list__image" src={imageData.imageSource} />
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={imageData.profile} />
      <div className="photo-list__user-info">
        <figcaption >{imageData.username}</figcaption>
        <address className="photo-list__user-location">{imageData.location.city}, {imageData.location.country}</address>
      </div>
      <PhotoFavButton />
      </div>
    </article>
  )
};

export default PhotoListItem;
