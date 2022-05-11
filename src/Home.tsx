import { useEffect, useState } from "react";
import { getShoes } from "src/api/ShoeApi";
import { ShoeList } from "src/reusable/ShoeList";
import { Shoe } from "./types/types";

interface HomeProps {
    shoes: Shoe[];
}

function Home() {
    const [shoes, setShoes] = useState<Shoe[]>([])
    useEffect(() => {
        async function getShoesWrapper() {
            const dbShoes = await getShoes();
            setShoes(dbShoes);
        }
        getShoesWrapper();
    // Dependency array specifies when to re-run useEffect
    // Since it should only run once, put an empty array
    }, []);
    // The state is watched by React so that it knows when to re-render the screen
    return (
        <>
            <h1>Everkicks</h1>
            <ShoeList shoes={shoes}/>
        </>
    );
}

export default Home;
