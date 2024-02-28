import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favouriteChecker, displayModal} = props;

  const [numberOfFavourites, setNumberOfFavourites] = useState(0);
  // count total number of favorites
  const countFavourites = (isFavourite) => {
    let countFavourites = numberOfFavourites;
    if(isFavourite){
      countFavourites++;
      setNumberOfFavourites(countFavourites);
    } else {
      countFavourites--;
      setNumberOfFavourites(countFavourites);
    }

    return countFavourites > 0 ? favouriteChecker(true) : favouriteChecker(false);
  }
  return (
    <ul className="photo-list">
      {
        photos.map(photo => 
          <PhotoListItem key={photo.id} photo={photo} countFavourites={countFavourites} displayModal={displayModal}/>
        )
      }
    </ul>
  );
};

export default PhotoList;
