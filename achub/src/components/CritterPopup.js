import React from 'react'
import styled from 'styled-components'
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

function CritterPopup({ critter, modalIsOpen, setIsOpen }) {

  function afterOpenModal() {
    // can do stuff here later
    return null
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
        contentLabel="Example Modal">
        <div className='horizontal'>
          <ModalLeftSide critter={critter} />
          <ModalRightSide critter={critter} closeModal={closeModal} />    
        </div>
      </Modal>
    </div>
  );
}

export default CritterPopup


// using styled components
{/* <HorizontalDiv>
          <VerticalDiv>
            <h1>{name}</h1>
            <ImgDiv>
              <StyledImg src={image_uri}></StyledImg>
            </ImgDiv>
          </VerticalDiv>
          <VerticalDiv>
              <NameH2>Availability</NameH2>
              <HorizontalDiv>
                <p>Month: {critter.availability['month-northern']}</p>
                <p>Time: {critter.availability['time']}</p>
              </HorizontalDiv>
              <PhraseDiv><PhraseP>{critter['museum-phrase']}</PhraseP></PhraseDiv>
              <ButtonDiv><Button onClick={closeModal}>Close</Button></ButtonDiv>
            </VerticalDiv>
        </HorizontalDiv> */}


// david's css code   
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


// const HorizontalDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   /* background-color: purple; */
//   `

// const VerticalDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: fit-content;
//   /* background-color: yellow; */
//   justify-content: center;
//   align-items: center;
// `