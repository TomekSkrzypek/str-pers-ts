import React from 'react';
import {Outlet, NavLink, BrowserRouter, Link} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {Home} from '../../pages/Home/Home';
import {Blog} from '../../pages/Blog/Blog';
import {Mail} from '../../pages/Mail/Mail';
import {ScrollPage} from '../../pages/ScrollPage/ScrollPage';
import {PageHeader} from '../PageHeader/PageHeader.jsx';
import {Menu} from "../Menu/Menu.jsx";
import supabase from "../../config/supabaseClient";
import './Layout.scss'






export function Layout() {

    console.log("supa base" + supabase)

    return (
        <div className="Layout">

            <Router>

                <div className='Layout__container'>

                    <PageHeader />

                    <main className="Layout__main">
                        <Outlet/>
                    </main>

                </div>

                <Routes>
                    <Route path="/" element={<ScrollPage/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/mail" element={<Mail/>}/>
                </Routes>

            </Router>

        </div>
    )
}