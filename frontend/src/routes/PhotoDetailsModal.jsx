import {React, useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const {toggleModal, modalDetails, photos, pushToFavourites, removeFromFavourites} = props;
  const {location, urls, user} = modalDetails;
  const getFavouritePhotoId = (favourite) => {
    favourite ? pushToFavourites(modalDetails) : removeFromFavourites(modalDetails);
  }

  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {
        modalDetails &&
        <div> 
          <div className="photo-details-modal__top-bar">
          <PhotoFavButton getFavouritePhotoId={getFavouritePhotoId}/>
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
              <PhotoList photos={photos}/>
            </section>
          </div>
        </div>
      }
    </div>
  )
};

export default PhotoDetailsModal;
