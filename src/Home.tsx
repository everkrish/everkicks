import { useEffect, useState } from "react";
import { getShoes } from "src/api/ShoeApi";
import { ShoeList } from "src/reusable/ShoeList";
import { DbShoe, Shoe } from "./types/types";

interface HomeProps {
    shoes: DbShoe[];
}

function Home({ shoes }: HomeProps) {
    // The state is watched by React so that it knows when to re-render the screen
    return (
        <>
            <h1>Everkicks</h1>
            <ShoeList shoes={shoes}/>
        </>
    );
}

export default Home;
