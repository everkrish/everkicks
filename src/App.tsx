import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { getShoes } from "src/api/ShoeApi";
import Spinner from "src/reusable/Spinner";
import { useUserContext } from "src/UserContext";
import { DbShoe, User } from "./types/types";

const DevTools = lazy(() => import(/* webpackChunkName: devtools */"./DevTools"));
const Home = lazy(() => import("./Home"));
const ManageShoes = lazy(() => import("./ManageShoes"));

enum Status {
    IDLE,
    LOADING,
    LOADED
}

function App() {
    // The state is watched by React so that it knows when to re-render the screen
    const [shoes, setShoes] = useState<DbShoe[]>([]);
    const [status, setStatus] = useState<Status>(Status.IDLE);
    const { user, setUser } = useUserContext();
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
                        { (user === User.ADMIN) && <li><Link to="/admin/shoes">Admin home</Link></li> }
                    </ul>
                </nav>
            </header>
            <main>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Home shoes={shoes} isLoading={status !== Status.LOADED}/>} />
                        {
                            (user === User.ADMIN)
                            && <Route path="/admin/shoes"
                                element={<ManageShoes shoes={shoes} setShoes={setShoes}
                                                      isLoading={status !== Status.LOADED}/>}/>
                        }
                    </Routes>
                </Suspense>
            </main>
            </BrowserRouter>
            {
                (process.env.REACT_APP_SHOW_DEV_TOOLS === "Y")
                && (<Suspense fallback={""}>
                    <DevTools />
                </Suspense>)
            }
        </>
    );
}

export default App;
