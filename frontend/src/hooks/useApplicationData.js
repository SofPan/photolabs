import { useReducer } from "react";

const useApplicationData = () => {
  // Globally track favourited photos
  const [favouriteArray, favouriteDispatch] = useReducer((favouriteArray, action) => {
    if (action.type === "add") {
      favouriteArray = [...favouriteArray, action.photo];
    }

    if (action.type === "remove") {
      favouriteArray = favouriteArray.filter(photo => photo.id != action.photo.id);
    }
    return favouriteArray;
  }, []);

  const addFavourite = (photo) => {
    favouriteDispatch({ type: "add", photo });
  }

  const removeFavourite = (photo) => {
    favouriteDispatch({ type: "remove", photo });
  }

  // Modals
  const [modal, modalDispatch] = useReducer((modal, action) => {
    if (action.type === "open") {
      modal = action.currentPhoto;
    }

    if (action.type === "close") {
      modal = false;
    }
    return modal;
  }, false)

  // Show or hide modal
  const openModal = (currentPhoto) => {
    modalDispatch({ type: "open", currentPhoto });
  }

  const closeModal = (currentPhoto) => {
    modalDispatch({ type: "close", currentPhoto })
  }

  return {
    addFavourite,
    removeFavourite,
    favouriteArray,
    modal,
    openModal,
    closeModal
  };
};

export default useApplicationData;