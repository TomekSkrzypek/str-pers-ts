import React from "react";
import {Navigate, Link} from "react-router-dom";
import './Menu.scss'
// import {Blog} from "../../pages/Blog/Blog.jsx";

export function Menu() {
    return (
        <div>
            <ul className="Menu">
                <li><Link className="Menu__item" to="/">Strona główna</Link></li>
                <li><Link className="Menu__item" to="/blog">Blog</Link></li>
                <li><Link className="Menu__item" to="/mail">Mail</Link></li>

            </ul>
        </div>
    )
}