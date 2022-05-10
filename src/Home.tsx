import { ShoeList } from "src/ShoeList";
import { Shoe } from "./types/types";

interface HomeProps {
    shoes: Shoe[];
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
