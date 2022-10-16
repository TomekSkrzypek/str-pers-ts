import React from 'react';
import {Logo} from "../Logo/Logo";
import {Menu} from "../Menu/Menu";
import './PageHeader.scss';


export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo/>
            <Menu/>
        </header>
    )
}