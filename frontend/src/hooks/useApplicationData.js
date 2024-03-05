import { useReducer, useEffect } from "react";

export const ACTIONS = {
  ADD_FAVOURITE: "add",
  REM_FAVOURITE: "remove",
  OPEN_MODAL: "open",
  CLOSE_MODAL: "close",
  SET_PHOTO_DATA: "set_photos",
  SET_TOPIC_DATA: "set_topics"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVOURITE:
      return [...state, action.photo];
    case ACTIONS.REM_FAVOURITE:
      return state.filter(photo => photo.id != action.photo.id);
    case ACTIONS.OPEN_MODAL:
      return action.currentPhoto;
    case ACTIONS.CLOSE_MODAL:
      return false;
    case ACTIONS.SET_PHOTO_DATA:
      return [...action.payload];
    case ACTIONS.SET_TOPIC_DATA:
      return [...action.payload];
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    photoData: [],
    topicData: [],
  }
  const [photoData, photoDispatch] = useReducer(reducer, initialState.photoData);

  useEffect(() => {
    fetch('/api/photos', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        photoDispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      })
      .catch(error => console.log("photo fetch error", error));
  }, []);

  const [topicData, topicDispatch] = useReducer(reducer, initialState.topicData);
  useEffect(() => {
    fetch('/api/topics', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        topicDispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      })
      .catch(error => console.log("topic fetch error", error));
  }, [])

  // Globally track favourited photos
  const [favouriteArray, favouriteDispatch] = useReducer(reducer, []);
  const addFavourite = (photo) => {
    favouriteDispatch({ type: ACTIONS.ADD_FAVOURITE, photo });
  }
  const removeFavourite = (photo) => {
    favouriteDispatch({ type: ACTIONS.REM_FAVOURITE, photo });
  }

  // Show or hide modal
  const [modal, modalDispatch] = useReducer(reducer, false);

  const openModal = (currentPhoto) => {
    modalDispatch({ type: ACTIONS.OPEN_MODAL, currentPhoto });
  }

  const closeModal = () => {
    modalDispatch({ type: ACTIONS.CLOSE_MODAL })
  }

  return {
    addFavourite,
    removeFavourite,
    favouriteArray,
    modal,
    openModal,
    closeModal,
    photoData,
    topicData
  };
};

export default useApplicationData;