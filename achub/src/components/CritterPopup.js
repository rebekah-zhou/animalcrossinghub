import React from 'react'
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
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)'
  }
};

const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: purple; */
  `

const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  /* background-color: yellow; */
  justify-content: center;
  align-items: center;
`
const NameH3 = styled.h3`
  /* background-color: purple; */
`

const ImgDiv = styled.div`
  /* background-color: orange; */
  margin-top: -40px;
`
const StyledImg = styled.img`
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const PhraseDiv = styled.div`
  width: 600px;
  height: auto;
  /* background-color: green; */
  padding-left: 30px;
  padding-right: 30px;
`

const PhraseP = styled.p`
  text-align: center;
  font-family: 'Rodin';
  font-weight: 500;
`
const ButtonDiv = styled.div`
  display:flex;
  justify-content: flex-end;
  /* background-color: blue; */
  width: 100%;
`

const Button = styled.button`
  width: auto;
`

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
  console.log(critter)

  //maybe fix capitalization? 
  const name = critter.name['name-USen']
  const {image_uri, price, availability} = critter

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
        contentLabel="Example Modal"
      >
        <HorizontalDiv>
          <VerticalDiv>
            <h1>{name}</h1>
            <ImgDiv>
              <StyledImg src={image_uri}></StyledImg>
            </ImgDiv>
          </VerticalDiv>
          <VerticalDiv>
              <PhraseDiv><PhraseP>{critter['museum-phrase']}</PhraseP></PhraseDiv>
          
              <ButtonDiv><Button onClick={closeModal}>Close</Button></ButtonDiv>
            </VerticalDiv>
        </HorizontalDiv>
      </Modal>
    </div>
  );
}

export default CritterPopup