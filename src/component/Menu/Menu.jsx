import React, {useEffect, useState} from "react";
import {Navigate, Link} from "react-router-dom";
import './Menu.scss'
// import "src/variables/breakpoints";
// @import "../../variables/breakpoints";
// import {Blog} from "../../pages/Blog/Blog.jsx";

export function Menu({toggle, isOpen}) {
    // ${({isOpen}) => (isOpen ? Menu.style.display='flex' : Menu.style.display='none')}

    const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 800);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <>
            {(isOpen || isDesktop) && <div>
                <ul className="Menu">
                    <li><Link className="Menu__item" to="/" onClick={toggle}>Strona główna</Link></li>
                    <li><Link className="Menu__item" to="/blog" onClick={toggle}>Blog</Link></li>
                    <li><Link className="Menu__item" to="/mail" onClick={toggle}>Mail</Link></li>
                </ul>
            </div>}
        </>
    )
}