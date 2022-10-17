import React from "react";
import {Link} from 'react-router-dom'
import "./Logo.scss"

export function Logo() {
    // return
    return (
        <>

            <h1 className="Logo"><Link className="Logo__item" to="/">Tomek Skrzypek</Link></h1>
        </>
    )
}