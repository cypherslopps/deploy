import React, { useEffect, useRef } from 'react';
import PropType from "prop-types";
import Portals from '../Portals';
import CartModal from './CartModal';
import UserFormModal from "./UserFormModal";
import GalleryModal from './GalleryModal';
import { AnimatePresence } from 'framer-motion';

const Modal = ({ type, closeModal, isOpen, data }) => {
  const modalContainerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", handleModalContainer);

    return () => window.removeEventListener("click", handleModalContainer);
  });

  const handleModalContainer = ({ target }) => {
    if(isOpen && target.contains(modalContainerRef.current))
      closeModal();
  }

  return (
    <Portals elementID="modal-root">
      <div 
        className='w-full h-full fixed top-0 left-0 bg-black/30 flex justify-center items-center'
        ref={modalContainerRef}
      >
        <AnimatePresence mode='wait'>
          {type === "cart-modal" ? (
            <CartModal closeModal={closeModal} />
          ) : type === "user-form-modal" ? (
            <UserFormModal closeModal={closeModal} />
          ) : type === "gallery-modal" ? (
            <GalleryModal 
              data={data}
              closeModal={closeModal} 
            />
          ) : null}
        </AnimatePresence>
      </div>
    </Portals>
  )
}

Modal.propType = {
  type: PropType.string
}

export default Modal;