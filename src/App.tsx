import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { getShoes } from "src/api/ShoeApi";
import DevTools, { userType } from "src/DevTools";
import { DbShoe } from "./types/types";
import ManageShoes from "./ManageShoes";
import Home from './Home';

enum Status {
    IDLE,
    LOADING,
    LOADED
}

function App() {
    // The state is watched by React so that it knows when to re-render the screen
    const [shoes, setShoes] = useState<DbShoe[]>([]);
    const [status, setStatus] = useState<Status>(Status.IDLE);
    const [user, setUser] = useState(userType.CUSTOMER);
    useEffect(() => {
        async function getShoesWrapper() {
            setStatus(Status.LOADING);
            const dbShoes = await getShoes();
            setShoes(dbShoes);
            setStatus(Status.LOADED);
        }
        getShoesWrapper();
        // Dependency array specifies when to re-run useEffect
        // Since it should only run once, put an empty array
    }, []);
    return (<>
            <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        { (user === userType.ADMIN) && <li><Link to="/admin/shoes">Admin home</Link></li> }
                    </ul>
                </nav>
            </header>
            <main>
                    <Routes>
                        <Route path="/" element={<Home shoes={shoes} isLoading={status !== Status.LOADED}/>} />
                        {
                            (user === userType.ADMIN)
                            && <Route path="/admin/shoes"
                                element={<ManageShoes shoes={shoes} setShoes={setShoes}
                                                      isLoading={status !== Status.LOADED}/>}/>
                        }
                    </Routes>
            </main>
            </BrowserRouter>
            <DevTools user={user} setUser={setUser}/>
        </>
    );
}

export default App;
