import { useReducer, useEffect } from "react";

export const ACTIONS = {
  ADD_FAVOURITE: "add",
  REM_FAVOURITE: "remove",
  OPEN_MODAL: "open",
  CLOSE_MODAL: "close",
  SET_PHOTO_DATA: "set_photos",
  SET_TOPIC_DATA: "set_topics",
  FILTER_TOPIC: "filter_topic"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVOURITE:
      return { ...state, favouriteData: [...state.favouriteData, action.payload] };
    case ACTIONS.REM_FAVOURITE:
      return { ...state, favouriteData: state.favouriteData.filter(photo => photo.id != action.payload.id) };
    case ACTIONS.OPEN_MODAL:
      return { ...state, modal: action.payload };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, modal: false };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.FILTER_TOPIC:
      return { ...state, currentTopicId: action.payload };
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
    currentTopicId: null,
    modal: false,
    favouriteData: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch all photos and topics
  useEffect(() => {
    // photos
    fetch('/api/photos', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      })
      .catch(error => console.log("photo fetch error", error));

    // topics
    fetch('/api/topics', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      })
      .catch(error => console.log("topic fetch error", error));
  }, []);

  // fetch by requested topic
  useEffect(() => {
    if (state.currentTopicId) {
      fetch(`/api/topics/photos/${state.currentTopicId}`, { method: "GET" })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        })
        .catch(error => console.log("change topic error", error));
    }
  }, [state.currentTopicId]);

  // Globally track favourited photos
  const addFavourite = (photo) => {
    dispatch({ type: ACTIONS.ADD_FAVOURITE, payload: photo });
  }
  const removeFavourite = (photo) => {
    dispatch({ type: ACTIONS.REM_FAVOURITE, payload: photo });
  }

  // Show or hide modal
  const openModal = (currentPhoto) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: currentPhoto });
  }

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL })
  }

  // filter by topic
  const selectTopic = (e) => {
    dispatch({ type: ACTIONS.FILTER_TOPIC, payload: e.target.parentNode.id })
  };


  return {
    addFavourite,
    removeFavourite,
    state,
    openModal,
    closeModal,
    selectTopic
  };
};

export default useApplicationData;