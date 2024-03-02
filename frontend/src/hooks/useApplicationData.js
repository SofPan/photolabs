import { useReducer } from "react";

const ADD_FAVOURITE = "add";
const REM_FAVOURITE = "remove";
const OPEN_MODAL = "open";
const CLOSE_MODAL = "close";

const useApplicationData = () => {
  // Globally track favourited photos
  const [favouriteArray, favouriteDispatch] = useReducer((favouriteArray, action) => {
    if (action.type === ADD_FAVOURITE) {
      return [...favouriteArray, action.photo];
    }

    if (action.type === REM_FAVOURITE) {
      return favouriteArray.filter(photo => photo.id != action.photo.id);
    }
  }, []);

  const addFavourite = (photo) => {
    favouriteDispatch({ type: ADD_FAVOURITE, photo });
  }

  const removeFavourite = (photo) => {
    favouriteDispatch({ type: REM_FAVOURITE, photo });
  }

  // Modals
  const [modal, modalDispatch] = useReducer((modal, action) => {
    if (action.type === OPEN_MODAL) {
      return action.currentPhoto;
    }

    if (action.type === CLOSE_MODAL) {
      return false;
    }
  }, false)

  // Show or hide modal
  const openModal = (currentPhoto) => {
    modalDispatch({ type: OPEN_MODAL, currentPhoto });
  }

  const closeModal = (currentPhoto) => {
    modalDispatch({ type: CLOSE_MODAL, currentPhoto })
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