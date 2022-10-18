import React, {useState} from 'react';
import {Logo} from "../Logo/Logo";
import {Menu} from "../Menu/Menu";
import './PageHeader.scss';
import {HiOutlineX} from 'react-icons/hi';
import {HiOutlineMenu} from 'react-icons/hi';


export function PageHeader() {
   const [isOpen, setIsOpen] = useState(false);
    console.log("isOpen state = " + isOpen);

   const toggle = () => {
       setIsOpen(!isOpen)
       console.log("toggle ! is open state=" + isOpen)
   }

    return (
        <div className="PageHeaderAndIcons">
            <header className="PageHeader">
                <Logo/>
                <Menu isOpen={isOpen} toggle={toggle} />
            </header>
            <HiOutlineMenu onClick={toggle} className="PageHeader__MenuIcon"/>
            <HiOutlineX onClick={toggle} className="PageHeader__CloseIcon"/>
        </div>
    )
}

