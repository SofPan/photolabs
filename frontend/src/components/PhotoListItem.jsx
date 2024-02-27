import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({imageData}) => {

  return(
    <article className="photo-list__item" key={imageData.id}>
      <img className="photo-list__image" src={imageData.imageSource} />
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={imageData.profile} />
      <div>
        <figcaption className="photo-list__user-info">{imageData.username}</figcaption>
        <address className="photo-list__user-location">{imageData.location.city}, {imageData.location.country}</address>
      </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
