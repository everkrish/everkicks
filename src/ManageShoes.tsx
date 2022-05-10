import SelectInput from "src/reusable/SelectInput";
import TextInput from "src/reusable/TextInput";
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
                    <SelectInput
                        id="brand" value={brand} label="Brand" onChange={onChange}
                        options={[
                            { value: "", label: "Select brand" },
                            { value: "Nike", label: "Nike" },
                            { value: "Adidas", label: "Adidas" },
                            { value: "British Knights", label: "British Knights" }
                        ]}
                        error={errors.brand}
                    />
                    <TextInput
                        id="name"
                        value={name}
                        label="Shoe name"
                        onChange={onChange}
                        type="text"
                        error={errors.name}
                    />
                    <TextInput
                        id="size"
                        value={size.toString()}
                        label="Shoe size"
                        onChange={onChange}
                        type="number"
                        error={errors.size}
                    />
                    <TextInput
                        id="price"
                        value={price.toString()}
                        label="Price"
                        onChange={onChange}
                        type="number"
                        error={errors.price}
                    />
                    <TextInput
                        id="date"
                        value={date.toString()}
                        label="Release Date"
                        onChange={onChange}
                        type="date"
                        error={errors.date}
                    />
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
