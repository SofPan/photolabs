import { useState, useReducer } from "react";

const useApplicationData = () => {
  // Globally track favourited photos

  const [favouriteArray, dispatch] = useReducer((favouriteArray, action) => {
    if (action.type === "add") {
      favouriteArray = [...favouriteArray, action.photo];
    }

    if (action.type === "remove") {
      favouriteArray = favouriteArray.filter(photo => photo.id != action.photo.id);
    }
    return favouriteArray;
  }, []);

  const addFavourite = (photo) => {
    dispatch({ type: "add", photo });
  }

  const removeFavourite = (photo) => {
    dispatch({ type: "remove", photo });
  }


  // Modal state
  const [displayModal, setDisplayModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

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

  return { addFavourite, removeFavourite, favouriteArray, toggleModal, displayModal };
};

export default useApplicationData;