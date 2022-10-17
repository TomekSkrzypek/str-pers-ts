import React from 'react';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react'
// import reactLogo from '../../assets/react.svg'
import './App.scss'
import {Layout} from '../Layout/Layout';
// import {ScrollPage} from "../../pages/ScrollPage/ScrollPage";
import {PageHeader} from "../PageHeader/PageHeader";
import {ScrollPage} from "../../pages/ScrollPage/ScrollPage";
import {Menu} from "../Menu/Menu";
import {Logo} from "../Logo/Logo";


function App() {
    // const [count, setCount] = useState(0)

    return (
        // <div className="App">
        <div>
            {/*<PageHeader/>*/}
            {/*<Menu/>*/}
            {/*<Logo/>*/}
            <Layout/>
            {/*<ScrollPage/>*/}
            {/*<Menu/>*/}
        </div>
    )
}

export default App
