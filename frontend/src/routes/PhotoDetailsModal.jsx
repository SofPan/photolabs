import {React, useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const {
    modalDetails,
    dispatchState
  } = props;

  const {location, urls, user, similar_photos} = modalDetails;

  const handleModalClick = () => {
    const stateObject = {
      type: "close",
      payload: modalDetails
    }
    dispatchState(stateObject);
  }
  const toggleFavouritePhoto = (favourite) => {
    const stateObject = {
      type: favourite ? "add" : "remove",
      payload: modalDetails
    }
    dispatchState(stateObject);
  }

  return (
    <div className="photo-details-modal">
      <button onClick={handleModalClick} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {
        modalDetails &&
        <div> 
          <div className="photo-details-modal__top-bar">
          <PhotoFavButton toggleFavouritePhoto={toggleFavouritePhoto}/>
            <img className="photo-details-modal__image" src={urls.full} />
          <div className="photo-details-modal__photographer-details">
              <img className="photo-details-modal__photographer-profile" src={user.profile} />
              <div className="photo-details-modal__photographer-info">
                <figcaption>{user.username}</figcaption>
                <address className="photo-details-modal__photographer-location">{location.city}, {location.country}</address>
              </div>
          </div>
          </div>
          <div className="photo-details-modal__header">
            <section className="photo-details-modal__images">
              <PhotoList photos={similar_photos}/>
            </section>
          </div>
        </div>
      }
    </div>
  )
};

export default PhotoDetailsModal;
