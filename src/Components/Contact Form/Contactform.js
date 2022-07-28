import React, {useState} from 'react';
import './Contactform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight} from '@fortawesome/free-solid-svg-icons';
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";

const Contactform = () => {

    const [userMessage, setUserMessage] = useState({
        username: '',
        useremail: '',
        userphone: '',
        usermessage: ''
    }); 
    const [Error, setError] = useState({
        NameError : false,
        EmailError : false,
        PhoneError : false,
        MessageError : false
    });

    const onNameChange = (evt) => {
        const Name = evt.target.value;
        if(Name.trim() === '' || isNaN(Name) === false){
            setError((prevState) => {
                return {...prevState, NameError: true}
            })
            setUserMessage((prevState) => {
                return {...prevState, username: ''}
        })
         } else {
            setError((prevState) => {
                return {...prevState, NameError: false}
            })
        setUserMessage((prevState) => {
            return {...prevState, username: Name}
        })
    }
    }

    const onEmailChange = (evt) => {
        const Email = evt.target.value;
        if(Email.includes('@')) {
            setError((prevState) => {
                return {...prevState, EmailError: false}
            })
            setUserMessage((prevState) => {
                return {...prevState, useremail: Email}
             })
        } else {
            setError((prevState) => {
                return {...prevState, EmailError: true}
            })
            setUserMessage((prevState) => {
                return {...prevState, useremail: Email}

        })}}

    const onPhoneChange = (Phone) => {
         const phoneNum = Phone;
         if(phoneNum.length > 3 && phoneNum.length < 16) {
            setError((prevState) => {
                return {...prevState, PhoneError: false}
            })
            setUserMessage((prevState) => {
                return {...prevState, userphone: phoneNum}
             })
        } else {
            setError((prevState) => {
                return {...prevState, PhoneError: true}
            })
            setUserMessage((prevState) => {
                return {...prevState, userphone: phoneNum}
             })
        } 
    }

    const onMessageChange = (evt) => {
        const Msg = evt.target.value;
        if(Msg.length < 1500) {
            setError((prevState) => {
                return {...prevState, MessageError: false}
            })
            setUserMessage((prevState) => {
                return {...prevState, usermessage: Msg}
             })
        } else {
            setError((prevState) => {
                return {...prevState, MessageError: true}
            })
            setUserMessage((prevState) => {
                return {...prevState, usermessage: Msg}
             })
        } 
        
    }


    const SubmitHandler = (e) => {
     e.preventDefault();

      if(userMessage.username === '' && userMessage.useremail === ''){
        setError((prevState) => {
            return {...prevState, NameError: true, EmailError: true}
        })
      }else {
        fetch('https://www.creativesquad.ca/send', {
            method:'POST',
            body: JSON.stringify(userMessage),
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then((response) => {
            response.json()
        }).then((response) => {
            if(response.status === 'success'){
                alert('Message Sent!');
            } else if(response.status === 'fail') {
               alert('Server-Side Error!');
            }
        })
        setUserMessage({
           username: '',
           useremail: '',
           userphone: '',
           usermessage: ''
       })
      }
      
    }
 

  return (
    <div>

    <section className='contact'>
            <div className='container px-5'>
                <div className='row gy-4 gx-2 align-items-center justify-content-center justify-content-lg-between'>   
                    <div className='col-sm-8 col-md-6 ms-5'>
                        <div className='px-0'><img className='img-fluid ContactImage' src={require('./Contact-Banner.png')} alt='Contact Us Banner' /></div>
                    </div>
                    <div className='col-12-text-center col-lg-5'>
                    <h2 className='ContactHeading mb-0'>Start Your Journey To <span>Digital Success</span></h2>
                    <p className='ContactParagraph mt-0'>Begin instantly by filling out the form below.</p>
                    <form id='contactForm' onSubmit={SubmitHandler} method='POST' action='send'>
                             
                            <div className='form-floating mb-0'>
                                <input id='name' type='text' placeholder='Full Name' onChange={onNameChange} value={userMessage.username} />
                                {Error.NameError && <p className='ErrorClasses'>Please enter a valid name.</p>}
                            </div>                                        
                            <div className='form-floating mb-0'>
                                <input id='email' type='email' placeholder='Email Address' onChange={onEmailChange} value={userMessage.useremail} />
                                {Error.EmailError && <p className='ErrorClasses'>Must include '@' for a valid email.</p>}
                            </div>                                                    
                            <div className='form-floating mb-0'>
                            <PhoneInput          
                            country={'ca'}
                            value={userMessage.userphone}
                            onChange={onPhoneChange}
                            />
                             {Error.PhoneError && <p className='ErrorClasses'>Please a valid phone number.</p>}
                            </div>
                            <div className='form-floating'>
                                <textarea id='message' type='text' placeholder='Message' onChange={onMessageChange} value={userMessage.usermessage}></textarea>                               
                                {Error.MessageError && <p className='ErrorClasses'>Please enter your message within the word limit (2500 Characters).</p>} 
                            </div>           
                            <div><button className='Contactbtn' type='submit'><FontAwesomeIcon icon={faCaretRight} className='fa-x' /> Submit</button></div>
                      
                    </form>
                      

                    </div>  
                </div>
            </div>
    </section>


    </div>
  )
}

export default Contactform;
