import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react'
// import reactLogo from '../../assets/react.svg'
import './App.scss'
// import {Home} from '../../pages/Home/Home';
// import {Blog} from '../../pages/Blog/Blog';
// import {Mail} from '../../pages/Mail/Mail';
import {Layout} from '../Layout/Layout';
import {ScrollPage} from "../ScrollPage/ScrollPage";


function App() {
    // const [count, setCount] = useState(0)

    return (
        // <div className="App">
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        {/*<Route path="/"     element={<Home />}/>*/}
                        {/*<Route path="/blog" element={<Blog/>}/>*/}
                        {/*<Route path="/mail" element={<Mail />}/>*/}
                    </Route>
                </Routes>
            </Router>

            <ScrollPage/>

        </div>)
}

export default App
