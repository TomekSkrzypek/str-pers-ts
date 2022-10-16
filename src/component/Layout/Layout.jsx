import React from 'react';
import {Outlet, NavLink} from "react-router-dom";
import {PageHeader} from '../PageHeader/PageHeader';
import {ScrollPage} from "../ScrollPage/ScrollPage";
import './Layout.scss'

export function Layout() {
    return (
        <div className="Layout">

            <PageHeader/>

            <ScrollPage/>

            <main className="Layout__main">
                <Outlet/>
            </main>

        </div>
    )
}