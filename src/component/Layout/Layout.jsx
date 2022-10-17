import React from 'react';
import {Outlet, NavLink, BrowserRouter, Link} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {Home} from '../../pages/Home/Home';
// import {Blog} from '../../pages/Blog/Blog';
// import {Mail} from '../../pages/Mail/Mail';
import {ScrollPage} from '../../pages/ScrollPage/ScrollPage';
import {PageHeader} from '../PageHeader/PageHeader.jsx';
import {Menu} from "../Menu/Menu.jsx";

import './Layout.scss'
import {Blog} from "../../pages/Blog/Blog.jsx";

export function Layout() {
    return (
        <div className="Layout">
            <PageHeader/>
            <Router>
                {/*<div>*/}
                {/*    <Link to="/blog">BLOG_W_ROUTER</Link>*/}
                {/*</div>*/}
                <li><Link className="Menu__item" to="/blog">Blog</Link></li>
                <Routes>
                    <Route path="/" element={<ScrollPage/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    {/*            <Route path="/mail" element={<Mail />}/>*/}
                </Routes>
            </Router>

            {/*<Link to="/blog">BLOGGGG</Link>*/}

            {/*<Menu/>*/}
            {/*<ScrollPage/>*/}

            {/*<main className="Layout__main">*/}
            {/*    <Outlet/>*/}
            {/*</main>*/}

        </div>
    )
}