import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// const ModalType = styled.div`
//   display: none;
//   position: fixed;
//   z-index: 2;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.4);
//   backdrop-filter: blur(4px)
// `

// const ModalContent = styled.div`
//   background-color: #fff;
//   margin: 25% auto;
//   padding: 20px 20px 20px 20px;
//   border: 1px solid #888;
//   width: 40%;
// `

Modal.setAppElement('#root');

function CritterPopup({ critter, modalIsOpen, setIsOpen }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <img src={critter.image_uri}></img>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default CritterPopup