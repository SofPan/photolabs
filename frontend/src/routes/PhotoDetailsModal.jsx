import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {toggleModal, modalDetails} = props;
  // const {location, urls, user} = modalDetails;
  if (modalDetails){
    console.log(modalDetails)
  }
  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* {
        modalDetails && 
        <div className="photo-details-modal__image">
          <img src={urls.full} />
        </div>
      } */}
    </div>
  )
};

export default PhotoDetailsModal;
