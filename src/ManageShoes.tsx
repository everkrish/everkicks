import { ShoeList } from "src/ShoeList";
import { Shoe } from "./types/types";
import { ChangeEvent, useState } from "react";

interface ManageShoesProps {
    shoes: Shoe[],
    setShoes: React.Dispatch<React.SetStateAction<Shoe[]>>
}

interface Errors {
    name: string;
    brand: string;
    price: string;
    size: string;
    date: string;
}

const defaultShoe: Shoe = { name: "", brand: "", size: 0, price: 0, date: "" }

function ManageShoes({ shoes, setShoes }: ManageShoesProps) {
    // The state is watched by React so that it knows when to re-render the screen
    const [newShoe, setNewShoe] = useState<Shoe>(defaultShoe);
    const [errors, setErrors] = useState<Partial<Errors>>({});
    const { name, brand, size, price, date } = newShoe;

    function onChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        setNewShoe({ ...newShoe, [event.target.id]: event.target.value });
    }

    function formIsValid() {
        const currentErrors: Partial<Errors> = {};
        if (! newShoe.brand) {
            currentErrors.brand = "Brand is required."
        }
        if (! newShoe.name) {
            currentErrors.name = "Name is required."
        }
        if (! newShoe.size) {
            currentErrors.size = "Size is required."
        }
        if (! newShoe.price) {
            currentErrors.price = "Price is required."
        }
        if (! newShoe.date) {
            currentErrors.date = "Date is required."
        }
        setErrors(currentErrors);
        return Object.keys(currentErrors).length === 0;
    }

    return (
        <>
            <h1>Everkicks: Manage Shoes</h1>
            <section>
                <h2>Add Shoe</h2>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    if (! formIsValid()) {
                        return;
                    }
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
                    { errors.brand && <div>{errors.brand}</div> }
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
                    { errors.name && <div>{errors.name}</div> }
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
                    { errors.size && <div>{errors.size}</div> }
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
                    { errors.price && <div>{errors.price}</div> }
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
                    { errors.date && <div>{errors.date}</div> }
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
