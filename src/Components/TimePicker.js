import React from 'react';
import Modal from './Modal';

import Button from 'react-bootstrap/Button';

function TimePicker({ chosenTime, setChosenTime }) {
  const [alreadyPickedTime, setAlreadyPickedTime] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState();

  React.useEffect(() => {
    setModalMessage('you have selected ' + chosenTime);
  }, [chosenTime])

  React.useEffect(() => {
    if (alreadyPickedTime) {
      setShowModal(true);
    }
  }, [alreadyPickedTime])
    
    return (
        <div>
            <Button
              variant="light"
              onClick={() => {
                  let chosenTime = '17:00';
                  setChosenTime(chosenTime);
                  setAlreadyPickedTime(true);//make the button COLOURED
              }}
              >17:00 
            </Button>

            <Button
              variant="light"
              onClick={() => {
                let chosenTime = '18:00';
                setChosenTime(chosenTime);
                setAlreadyPickedTime(true);
              }}
              >18:00
            </Button>

            <Button
              variant="light"
              onClick={() => {
                let chosenTime = '19:00';
                setChosenTime(chosenTime);
                setAlreadyPickedTime(true);
              }}
              >19:00
            </Button>

            <Modal toggle={showModal} message={modalMessage} />
        </div>
    ); 
   
  }


export default TimePicker;