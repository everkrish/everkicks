
function Home() {
    // The state is watched by React so that it knows when to re-render the screen
    const shoes: Array<string> = [];
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
