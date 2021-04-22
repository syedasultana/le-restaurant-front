import React from 'react';


function Modal({ toggle, message }) {
    
    if (toggle) {
        return (
            <div>
                <p>{message}</p>
            </div>
        ); 
    } else {
        return (
            <div></div>
        )
    }
   
  }

export default Modal;