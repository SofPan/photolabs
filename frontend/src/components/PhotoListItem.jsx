import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const imageData = props.imageData;

  return(
    <div key={imageData.id}>
      <img src={imageData.imageSource} />
      <img src={imageData.profile} />
      <p>{imageData.username}</p>
      <p>{imageData.location.city}, {imageData.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
