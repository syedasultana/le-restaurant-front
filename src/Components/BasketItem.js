import React from 'react';
import Modal from './Modal';

import Button from 'react-bootstrap/Button';

function BasketItem({ name, price, quantity, setOrder, index, order }) {
    const [showModal, setShowModal] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState();

    let btnStyle = {
        margin: '5px'
    };
    

    return (
    <div class="basket-item">

        <div class="container-2">
            <div class="menu-box-1">
                <p>{name}</p>
                <p>£{price}</p>
            </div>
            <div class="menu-box-2">
                <p>quantity: {quantity}</p>
            </div>
            <div class="menu-box-3">
                {/* button to increase the quantity */}
                <Button
                    style={btnStyle}
                    variant="dark"
                    onClick={() => {
                        let newQuantity = quantity + 1;
                        if (newQuantity < 6) {
                            let changedItem = order[index];
                            changedItem.quantity = newQuantity;
                            const updatedItem = changedItem;

                            let changedOrder = order;
                            changedOrder[index] = updatedItem;
                            //console.log('changedOrder:', changedOrder)

                            const updatedOrder = changedOrder;
                            setOrder([...updatedOrder]);
                        } else {
                            //console.log('only up to 5 quanities allowed');
                            setModalMessage('Only up to 5 quanities allowed');
                            setShowModal(true);
                        }

                    }}
                    >+
                </Button>

                {/* button to decrease the quantity */}
                <Button
                    style={btnStyle}
                    variant="dark"
                    onClick={() => {
                        let newQuantity = quantity - 1;
                        if (newQuantity > 0) {
                            let changedItem = order[index];
                            changedItem.quantity = newQuantity;
                            const updatedItem = changedItem;

                            let changedOrder = order;
                            changedOrder[index] = updatedItem;

                            const updatedOrder = changedOrder;
                            setOrder([...updatedOrder]);
                        } else {
                            let currentOrder = order;
                
                            if (index > -1) {
                                currentOrder.splice(index, 1);
                            }
                            const updatedOrder = currentOrder;
                            setOrder([...updatedOrder]);
                        }
                        
                    }}
                    >-
                </Button>
            </div>
        </div>


        <Modal toggle={showModal} message={modalMessage} />

    </div>
    ); 
   
  }

export default BasketItem;