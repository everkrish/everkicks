import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageShoes from "./ManageShoes";
import Home from './Home';

function App() {
    // The state is watched by React so that it knows when to re-render the screen
    const shoes: Array<string> = [];
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/shoes" element={<ManageShoes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
