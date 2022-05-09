import { useState } from "react";

function ManageShoes() {
    // The state is watched by React so that it knows when to re-render the screen
    const [shoes, setShoes] = useState(["Nike", "Reebok", "Adidas"]);
    const [newShoe, addShoe] = useState("");
    return (
        <>
            <h1>Everkicks</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                setShoes([...shoes, newShoe]);
                addShoe("");
            }}>
                <label htmlFor="shoe-name">Shoe name</label>
                <br/>
                <input
                    type="text"
                    id="shoe-name"
                    value={newShoe}
                    onChange={(event) => addShoe(event.target.value)}
                />
                <button type="submit">Add shoe</button>
            </form>
            <ul>
                { shoes.map((shoe) => <li>{shoe}</li>) }
            </ul>
        </>
    );
}

export default ManageShoes;
