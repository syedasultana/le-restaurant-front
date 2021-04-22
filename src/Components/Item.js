import React from 'react';
import Modal from './Modal';

import Button from 'react-bootstrap/Button';

function Item({ name, price, order, setOrder, loggedIn }) {
    const [btnVal, setBtnVal] = React.useState('add');
    const [btnToggle, setBtnToggle] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState();
    
    return (
    <div class="menu-item">

        <div class="container-2">
            <div class="menu-box-1">
                <p>{name}</p>
            </div>
            <div class="menu-box-2">
                <p>£{price}</p>
            </div>
            <div class="menu-box-3"> 
                {/* button to add the item to the order */}
                <Button
                    variant="light"
                    disabled={btnToggle}
                    onClick={() => {
                        //first check if they are logged in - if not show modal
                        if (loggedIn) {
                            const item = {itemName: name, itemPrice: price, quantity: 1}
                            const updatedOrder = [...order, item]
                            setOrder(updatedOrder); 
                            //ONCE ADDED, THIS ITEM CAN NO LONGER BE ADDED - ALREADY EXISTS IN ORDER
                            setBtnVal('added');
                            setBtnToggle(true);
                        } else {
                            setModalMessage('Please log in to add to order');
                            setShowModal(true);
                        }
                        
                    }}
                    >{btnVal}
                </Button>
            </div>
        </div> 
        <Modal toggle={showModal} message={modalMessage} />
    </div>
    ); 
   
  }

export default Item;