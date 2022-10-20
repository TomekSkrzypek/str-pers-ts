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
        // if (isOpen) {
        //     // HiOutlineMenu.style{display: 'none'};
        // }
    }

    return (
        // className="PageHeaderAndIcons"
        <div className="PageHeaderAndIcons">

            <header className="PageHeader">
                <Logo/>
                <Menu isOpen={isOpen} toggle={toggle}/>
            </header>
            {isOpen ?  <HiOutlineX onClick={toggle} className="PageHeader__CloseIcon"/> :
           <HiOutlineMenu onClick={toggle} className="PageHeader__MenuIcon"/>}

        </div>

    )
}

