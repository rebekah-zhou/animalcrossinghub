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

const NameH2 = styled.h2`
  /* background-color: purple; */
  text-decoration: underline dotted 1px;
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

Modal.setAppElement('#root');

function CritterPopup({ critter, modalIsOpen, setIsOpen }) {
  console.log(critter)

  const monthsArr = critter.availability['month-array-northern'].map(num => {
    switch(num) {
      case 1:
        return 'Jan'
      case 2:
        return 'Feb'
      case 3: 
        return 'Mar'
      case 4: 
        return 'April'
      case 5: 
        return 'May'
      case 6:
        return 'June'
      case 7: 
        return 'July'
      case 8:
        return 'Aug'
      case 9:
        return 'Sept'
      case 10: 
        return 'Oct'
      case 11: 
        return 'Nov'
      case 12: 
        return 'Dec'
    }
  })

  //maybe fix capitalization? 
  const name = critter.name['name-USen']

  const time = critter.availability.time ? critter.availability.time : 'All hours'

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
        <div className='horizontal'>
          <div className='vertical'>
            <h1>{name}</h1>
            <ImgDiv>
              <StyledImg src={critter.image_uri}></StyledImg>
            </ImgDiv>
          </div>
          <div className='vertical'>
              <NameH2>Availability</NameH2>
                <p>Months: {critter.availability['month-northern']} </p>
                <p>Time: {time}</p>
              <NameH2>Description</NameH2>
              <PhraseDiv><PhraseP>{critter['museum-phrase']}</PhraseP></PhraseDiv>
              <ButtonDiv><Button onClick={closeModal}>Close</Button></ButtonDiv>
            </div>
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