import { useState } from "react";

const useApplicationData = () => {
  // Globally track favourited photos
  const [hasFavourite, setHasFavourite] = useState(false);
  const [favouriteArray, setFavouriteArray] = useState([]);
  // Modal state
  const [displayModal, setDisplayModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  // add new favourite to array
  const pushToFavourites = (favouritePhoto) => {
    const favouritePhotoArray = [...favouriteArray, favouritePhoto]
    setFavouriteArray(favouritePhotoArray);
    setHasFavourite(true);
  }
  // remove un-favourited item from array and check length
  const removeFromFavourites = (photoToRemove) => {
    const filteredPhotoArray = favouriteArray.filter(photo => photo.id != photoToRemove.id);
    setFavouriteArray(filteredPhotoArray);
    // if no array items remain, favourites notification should clear
    filteredPhotoArray.length === 0 && setHasFavourite(false);
  }

  // Show or hide modal
  const toggleModal = (id) => {
    const isDisplayed = !displayModal;
    setDisplayModal(isDisplayed);

    if (isDisplayed) {
      const currentPhoto = photos.filter(photo => photo.id === id)[0];
      setModalDetails({
        urls: currentPhoto.urls,
        user: currentPhoto.user,
        location: currentPhoto.location
      });
    }
  }
};

export default useApplicationData;