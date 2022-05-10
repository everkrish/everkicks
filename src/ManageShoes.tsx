import { Shoe } from "./types/types";
import { useState } from "react";

interface ManageShoesProps {
    shoes: Shoe[],
    setShoes: React.Dispatch<React.SetStateAction<Shoe[]>>
}

function ManageShoes({ shoes, setShoes }: ManageShoesProps) {
    // The state is watched by React so that it knows when to re-render the screen
    const [newShoe, addShoe] = useState("");
    const [brand, setBrand] = useState("");
    return (
        <>
            <h1>Everkicks: Manage Shoes</h1>
            <section>
                <h2>Add Shoe</h2>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setShoes([...shoes, { name: newShoe, brand: brand }]);
                    addShoe("");
                }}>
                    <div>
                        <label htmlFor="brand">Brand</label>
                        <br/>
                        <select id="brand" value={brand} onChange={(event) => setBrand(event.target.value)}>
                            <option value="">Select brand</option>
                            <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="British Knights">British Knights</option>
                        </select>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="shoe-name">Shoe name</label>
                        <br/>
                        <input
                            type="text"
                            id="shoe-name"
                            value={newShoe}
                            onChange={(event) => addShoe(event.target.value)}
                        />
                        <br/>
                    </div>
                    <button type="submit">Add shoe</button>
                </form>
            </section>
            <section>
                <h2>Shoes</h2>
                <ul>
                    {shoes.map((shoe) => <li>{shoe.brand + " " + shoe.name}</li>)}
                </ul>
            </section>
        </>
    );
}

export default ManageShoes;
