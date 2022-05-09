import { useState } from "react";

function App() {
    const [shoes, setShoes] = useState(["Nike", "Reebok", "Adidas"]);
    return (
        <>
            <h1>Everkicks</h1>
            <ul>
                { shoes.map((shoe) => <li>{shoe}</li>) }
            </ul>
        </>
    );
}

export default App;
