import LoadingContainer from "src/reusable/LoadingContainer";
import { ShoeList } from "src/reusable/ShoeList";
import { DbShoe, Shoe } from "./types/types";

interface HomeProps {
    shoes: DbShoe[];
    isLoading: boolean;
}

function Home({ shoes, isLoading }: HomeProps) {
    // The state is watched by React so that it knows when to re-render the screen
    return (
        <>
            <h1>Everkicks</h1>
            <LoadingContainer isLoading={isLoading}>
                <ShoeList shoes={shoes}/>
            </LoadingContainer>
        </>
    );
}

export default Home;
