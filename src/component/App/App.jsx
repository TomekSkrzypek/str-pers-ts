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
                        {/*<Route path="/blog" element={<Blog />}/>*/}
                        {/*<Route path="/mail" element={<Mail />}/>*/}
                    </Route>
                </Routes>
            </Router>
            <ScrollPage/>

        </div>)


    {/*<div>*/
    }
    {/*  <a href="https://vitejs.dev" target="_blank">*/
    }
    {/*    <img src="/stronaPersonalna/public/vite.svg" className="logo" alt="Vite logo" />*/
    }
    {/*  </a>*/
    }
    {/*  <a href="https://reactjs.org" target="_blank">*/
    }
    {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/
    }
    {/*  </a>*/
    }
    {/*</div>*/
    }
    {/*    <h1>Vite + React</h1>*/
    }
    {/*    <div className="card">*/
    }
    {/*        <button onClick={() => setCount((count) => count + 1)}>*/
    }
    {/*            count isaaa {count}*/
    }
    {/*        </button>*/
    }
    {/*        <p>*/
    }
    {/*            Edit <code>src/App.jsx</code> and save to test HMR*/
    }
    {/*        </p>*/
    }
    {/*    </div>*/
    }
    {/*    <p className="read-the-docs">*/
    }
    {/*        Click on the Vite and React ldsfnogos to learn more*/
    }
    {/*    </p>*/
    }
    {/*</div>*/
    }

}

export default App
