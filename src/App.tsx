import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageShoes from "./ManageShoes";
import Home from './Home';

function App() {
    // The state is watched by React so that it knows when to re-render the screen
    const [shoes, setShoes] = useState(["Nike", "Reebok", "Adidas"]);
    return (<>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/admin/shoes">Admin home</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home shoes={shoes}/>} />
                        <Route path="/admin/shoes" element={<ManageShoes shoes={shoes} setShoes={setShoes}/>} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}

export default App;
