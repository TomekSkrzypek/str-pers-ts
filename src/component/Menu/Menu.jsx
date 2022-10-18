import React from "react";
import {Navigate, Link} from "react-router-dom";
import './Menu.scss'

// import {Blog} from "../../pages/Blog/Blog.jsx";

export function Menu({toggle, isOpen}) {
    // ${({isOpen}) => (isOpen ? Menu.style.display='flex' : Menu.style.display='none')}

    return (
        <>
            {isOpen && <div>
            <ul className="Menu">
                <li><Link className="Menu__item" to="/" onClick={toggle}>Strona główna</Link></li>
                <li><Link className="Menu__item" to="/blog" onClick={toggle}>Blog</Link></li>
                <li><Link className="Menu__item" to="/mail" onClick={toggle}>Mail</Link></li>
            </ul>
        </div>}
        </>
    )
}