import React from 'react';
import {Outlet, NavLink} from "react-router-dom";
import {PageHeader} from '../PageHeader/PageHeader';
import {ScrollPage} from "../ScrollPage/ScrollPage";

export function Layout() {
    return (
        <div>
            <PageHeader />
            <ScrollPage />
            <Outlet />
        </div>
    )
}