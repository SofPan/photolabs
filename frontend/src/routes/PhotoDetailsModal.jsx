import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const dummyModal = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "urls": {
    "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
    "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
  },
  "user": {
    "id": "1",
    "username": "exampleuser",
    "name": "Joe Example",
    "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
  }
}


const PhotoDetailsModal = (props) => {
  const {toggleModal, modalDetails, photos} = props;
  // const {location, full, user} = modalDetails;
  // console.log(modalDetails);
  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* <div className="photo-details-modal__top-bar"> */}
      <article>
        <img className="photo-details-modal__image" src={dummyModal.urls.full} />
      <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={dummyModal.user.profile} />
          <div className="photo-details-modal__photographer-info">
            <figcaption>{dummyModal.user.username}</figcaption>
            <address className="photo-details-modal__photographer-location">{dummyModal.location.city}, {dummyModal.location.country}</address>
          </div>
      </div>
      </article>
      {/* </div> */}
      <div className="photo-details-modal__header">
        <section className="photo-details-modal__images">
          <PhotoList photos={photos}/>
        </section>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
