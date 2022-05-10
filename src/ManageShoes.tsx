import { ShoeList } from "src/ShoeList";
import { Shoe } from "./types/types";
import { ChangeEvent, useState } from "react";

interface ManageShoesProps {
    shoes: Shoe[],
    setShoes: React.Dispatch<React.SetStateAction<Shoe[]>>
}

const defaultShoe: Shoe = { name: "", brand: "", size: 0, price: 0, date: "" }

function ManageShoes({ shoes, setShoes }: ManageShoesProps) {
    // The state is watched by React so that it knows when to re-render the screen
    const [newShoe, setNewShoe] = useState<Shoe>(defaultShoe);
    const { name, brand, size, price, date } = newShoe;

    function onChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        setNewShoe({ ...newShoe, [event.target.id]: event.target.value });
    }

    return (
        <>
            <h1>Everkicks: Manage Shoes</h1>
            <section>
                <h2>Add Shoe</h2>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setShoes([...shoes, newShoe]);
                    setNewShoe(defaultShoe);
                }}>
                    <div>
                        <label htmlFor="brand">Brand</label>
                        <br/>
                        <select id="brand" value={brand}
                                onChange={onChange}>
                            <option value="">Select brand</option>
                            <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="British Knights">British Knights</option>
                        </select>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="name">Shoe name</label>
                        <br/>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChange}
                        />
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="size">Shoe size</label>
                        <br/>
                        <input
                            type="number"
                            step="0.5"
                            id="size"
                            value={size}
                            onChange={onChange}
                        />
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <br/>
                        <input
                            type="number"
                            step="0.01"
                            id="price"
                            value={price}
                            onChange={onChange}
                        />
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="date">Release Date</label>
                        <br/>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={onChange}
                        />
                        <br/>
                    </div>
                    <button type="submit">Add shoe</button>
                </form>
            </section>
            <section>
                <h2>Shoes</h2>
                <ShoeList shoes={shoes} />
            </section>
        </>
    );
}

export default ManageShoes;
