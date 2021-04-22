import React from 'react';
import Modal from './Modal';

import Button from 'react-bootstrap/Button';

function DatePicker({ chosenDate, setChosenDate }) {
  const [alreadyPickedDate, setAlreadyPickedDate] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState();

    React.useEffect(() => {
      setModalMessage('you have selected ' + chosenDate);
    }, [chosenDate])

    React.useEffect(() => {
      if (alreadyPickedDate) {
        setShowModal(true);
      }
    }, [alreadyPickedDate])
    
    return (
        <div>
            <Button
              variant="light"
              onClick={() => {
                  let chosenDate = new Date(2021, 3, 1);
                  let d = formatDate(chosenDate);
                  setChosenDate(d);
                  setAlreadyPickedDate(true);//make the button COLOURED
              }}
              >1st April
            </Button>

            <Button
              variant="light"
              onClick={() => {
                let chosenDate = new Date(2021, 3, 2);
                let d = formatDate(chosenDate);
                setChosenDate(d);
                setAlreadyPickedDate(true);
              }}
              >2nd April
            </Button>

            <Button
              variant="light"
              onClick={() => {
                let chosenDate = new Date(2021, 3, 3);
                let d = formatDate(chosenDate);
                setChosenDate(d);
                setAlreadyPickedDate(true);
              }}
              >3rd April
            </Button>

            <Modal toggle={showModal} message={modalMessage} />
        </div>
    ); 
   
}

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [day, month, year].join('.');
}


export default DatePicker;