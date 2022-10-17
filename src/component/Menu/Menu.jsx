import React from "react";
import {Navigate, Link} from "react-router-dom";
import './Menu.scss'
import {Blog} from "../../pages/Blog/Blog.jsx";

export function Menu() {
    return (
        <div>
            <h1>MENU</h1>
            <ul className="Menu">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                {/*<Link to="/blog">BLOGER</Link>*/}
                {/*<li><Link className="Menu__item" to="/">Strona główna</Link> </li>*/}
                {/*<li><Link className="Menu__item" to="/blog">Blog</Link></li>*/}
                {/*<li><Link className="Menu__item" to="/mail">Mail</Link></li>*/}

            </ul>
        </div>
    )
}