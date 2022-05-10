import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Shoe } from "./types/types";
import ManageShoes from "./ManageShoes";
import Home from './Home';

function App() {
    // The state is watched by React so that it knows when to re-render the screen
    const [shoes, setShoes] = useState<Shoe[]>([
        { brand: "Nike", name: "Air Max", size: 10, price: 89.99, date: "12/2012" },
        { brand: "Reebok", name: "Pump" , size: 11, price: 74.99, date: "3/2017" }
    ]);
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
