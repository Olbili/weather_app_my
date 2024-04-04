import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import s from './modal.module.css'


const Modal = ({modalIsOpen, onClose, setUsername, handleLogout, signUp}) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    
        setName('');
        setEmail('');
        setPassword('')

        setUsername (name)
      };

     

  return (
    <>
    {modalIsOpen && (
   <div className={s.modal}>
    <div className={s.modalWrapper}>
        <div className={s.modalContent}>
            <button className={s.closeModal} onClick={() => onClose()}>
            <IoIosClose />
            </button>
                {localStorage.getItem('name') ? (
                    <div>
                    <h1 className={s.h1}>You are already logged in</h1>
                    <button className={s.logout}onClick={handleLogout}>Log Out</button>
                  </div>
                ) : (
                  <h1 className={s.sign}>Sign Up</h1>
                )}
                {!localStorage.getItem('name') && (<form className={s.form} onSubmit={handleSubmit}> 
                <label className={s.labelForm}>
                Username
                    <input className={s.inputForm} type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} placeholder='Username' />
                </label>
                <label className={s.labelForm}>
                E-Mail
                    <input className={s.inputForm} type='' name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='E-Mail' />
                </label>
                <label className={s.labelForm}>
                Password
                    <input className={s.inputForm} type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                </label>
                <button className={s.buttonForm} type='submit' onClick={() => signUp() } >
                Sign Up</button>   
            </form> 
            )} 
            {/* <p>Already have an account? <a href='#'>Log in</a></p> */}
        </div>
    </div>
   </div>
    )
}
   </>
  )
}

export default Modal