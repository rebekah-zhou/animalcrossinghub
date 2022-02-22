import React from 'react'
import Modal from 'react-modal'
import ModalRightSide from './ModalRightSide';
import ModalLeftSide from './ModalLeftSide';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f1ebdc',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)'
  }
};

Modal.setAppElement('#root');

function CritterModal({ critter, modalIsOpen, setIsOpen }) {

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
        <div className='horizontal'>
          <ModalLeftSide critter={critter} />
          <ModalRightSide critter={critter} closeModal={closeModal} />    
        </div>
      </Modal>
    </div>
  );
}

export default CritterModal