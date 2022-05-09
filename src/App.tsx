import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ManageShoes from "./ManageShoes";
import Home from './Home';

function App() {
    // The state is watched by React so that it knows when to re-render the screen
    const [shoes, setShoes] = useState(["Nike", "Reebok", "Adidas"]);
    return (<>
            <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/admin/shoes">Admin home</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                    <Routes>
                        <Route path="/" element={<Home shoes={shoes}/>} />
                        <Route path="/admin/shoes" element={<ManageShoes shoes={shoes} setShoes={setShoes}/>} />
                    </Routes>
            </main>
            </BrowserRouter>
        </>
    );
}

export default App;
