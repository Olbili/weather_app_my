import React from 'react'
import s from './footer.module.css'
import logo from 'img/logoo.svg';
import inst from 'img/inst.svg';
import face from 'img/face.svg';
import whatsapp from 'img/whatsapp.svg';
import Container from '../Container/Container';

const Footer = () => {
  return (
    <footer className={s.footer}>
        <Container>
            <div className={s.footer}>
                <div className={s.headerlogoadress}>
                <div className={s.logo}>
                <img src={logo} alt="logo" />
                </div>
             <div className={s.adress}>
            <h4>Adress</h4>
            <p>Svobody str. 35 <br/>
            Kyiv <br/>
            Ukraine <br/></p>
            </div>
            </div>
        <div className={s.contacts}>
        <h4>Contact us</h4>
        <div className={s.socials}>
            <img src={inst} alt="" />
            <img src={face} alt="" />
            <img src={whatsapp} alt="" />
        </div>
        </div>
            </div>
       
        </Container>
        
    </footer>
  )
}

export default Footer