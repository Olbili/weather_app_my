import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem'
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import s from './header.module.scss';
import logo from 'img/logoo.svg';
import user from 'img/user.svg'
// import { useEffect, useState } from 'react';


const Header = ({setModalIsOpen, username, onLogout, isUserLoggedIn}) => {

  return (
    <header className={s.header}>
      <a href="#" className="logo"><img className={s.logo} src={logo} alt="logo" /></a>
      {/* <div className={s.hiddenMenu}> */}
          <ul className={s.hiddenMenuUl}>
              <li><a href='#'>Who we are</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Menu</a></li>
           </ul>
        {/* </div> */}
        <ul className={s.hiddenMenuUltwo}>
              {!isUserLoggedIn && (
                  <li><button className={s.hiddenButton}onClick={() => setModalIsOpen(true)}>Sign up</button></li>
                )}
                {isUserLoggedIn && (
                  <li> <button className={s.hiddenButton} onClick={onLogout}>Log Out </button></li>
                )}
              {/* <li><button className={s.hiddenButton}>Sign up</button></li> */}
              <li><img src={user} className={s.avatar} /></li>
          </ul>
      <div className={s.dropDown}>
        <Dropdown>
          <MenuButton className={s.menuButton}>
            {isUserLoggedIn ? username : 'Menu'}
            <IoIosArrowDown />
          </MenuButton>
          <Menu className={s.menu} slots={{ listbox: "ul"}}>
            <div className={s.menuFlex}>
            <div className={s.mainInformation}>
              <MenuItem ><a href='#'>Who we are</a></MenuItem>
              <MenuItem ><a href="#">Contacts</a></MenuItem>
              <MenuItem ><a href="#">Menu</a></MenuItem>
            </div>
            <div className={s.profile}>
            <MenuItem ><RxAvatar/></MenuItem>
              {!isUserLoggedIn && (
                <MenuItem ><button className={s.buttonMenu}onClick={() => setModalIsOpen(true)}>Sign up</button></MenuItem>
              )}
              {isUserLoggedIn && (
                <MenuItem> <button className={s.logout}onClick={onLogout}>Log Out </button></MenuItem>
              )}
            </div>
            </div>
          </Menu>
        </Dropdown>
       
      </div>
    </header>
    )
  }

export default Header

