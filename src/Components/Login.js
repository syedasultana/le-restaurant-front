import React from 'react';
import Modal from './Modal';
import axios from "axios";

import Button from 'react-bootstrap/Button';

function Login({ loggedIn, setLoggedIn, setOrder, loginData, setLoginData }) {
    const [emailInput, setEmailInput] = React.useState();
    const [passwordInput, setPasswordInput] = React.useState();
    const [usersData, setUsersData] = React.useState();
    const [showModal, setShowModal] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState();


    let styles = {
        fontSize: '20px'
    };
    //checks if user is logged in to determine which view to display
    if (loggedIn) {
        return (
            <div style={styles}>
                <p>Logged in as {loginData.first_name} {loginData.last_name} | {loginData.email}</p>
                <div>
                    {
                        (loginData.admin)
                        ? <h3>ADMIN USER</h3>
                        : <></>   
                    }
                </div>
                <Button
                    variant="light"
                    onClick={() => {
                        setEmailInput('');
                        setPasswordInput('');
                        setOrder([]);
                        setLoggedIn(false);
                        setLoginData({}); 
                    }}
                    >Log out
                </Button>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Login:</h3>
                <div class="form">
                    <input 
                        placeholder="email address"
                        onChange={(event) => {
                            setEmailInput(event.target.value);
                        }}
                        
                        value={emailInput}
                    />

                    <input 
                        // type="password"
                        placeholder="password"
                        onChange={(event) => {
                            setPasswordInput(event.target.value);
                        }}
                        
                        value={passwordInput}
                        // value={hidePassword(passwordInput)}
                    />

                    <Button
                        variant="light"
                        onClick={async () => {
                            console.log('email: ', emailInput);
                            //GET request to the database, users table
                            axios
                            .get(
                                `http://localhost:3100/users`, 
                            )
                            .then(response => {
                                console.log(response)
                                setUsersData(response.data);
                                if (findCredentials(response.data, emailInput, passwordInput) !== '') {
                                    let index = findCredentials(response.data, emailInput, passwordInput);
                                    let credentialsObj = {};
                                    credentialsObj.email = emailInput;
                                    credentialsObj.user_id = response.data[index].user_id;
                                    credentialsObj.first_name = response.data[index].first_name;
                                    credentialsObj.last_name = response.data[index].last_name;
                                    credentialsObj.admin = response.data[index].admin;
                                    setLoginData(credentialsObj);
                                    setLoggedIn(true);
                                } else {
                                    setModalMessage('Invalid credentials');
                                    setShowModal(true);
                                }
                            })
                            .catch(err => {
                                console.log(err)
                            });
                        }}
                        >Log in
                    </Button>
                    <Modal toggle={showModal} message={modalMessage} />
                </div>
            </div>
        ); 
    }
    
   
}

//retrieved data is looped through to see if entered credentials are matched
function findCredentials(data, emailInput, passwordInput) {
    let result = data.map(datum => matchedCredentials(datum, emailInput, passwordInput));
    if (result.includes(true)) {
        let index = result.indexOf(true);
        return index;
    } else {
        return '';
    }
}

//individual record is checked to match with the entered credentials
function matchedCredentials(datum, emailInput, passwordInput) {
    if (datum.email === emailInput && datum.password === passwordInput) {
        return true;
    } else {
        return false;
    }
}

function hidePassword(password) {
    if (password) {
        if (password.length > 0) {
            let wordArray = password.split('');
            let starred = wordArray.map(x => '*');
            return starred.join('');
        } 
    } else {
        return '';
    }
}

export default Login;