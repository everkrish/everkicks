interface HomeProps {
    shoes: string[];
}

function Home({ shoes }: HomeProps) {
    // The state is watched by React so that it knows when to re-render the screen
    return (
        <>
            <h1>Everkicks</h1>
            <ul>
                { shoes.map((shoe) => <li>{shoe}</li>) }
            </ul>
        </>
    );
}

export default Home;
