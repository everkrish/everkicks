import SelectInput from "src/reusable/SelectInput";
import TextInput from "src/reusable/TextInput";
import { ShoeList } from "src/ShoeList";
import { Shoe } from "./types/types";
import { ChangeEvent, FocusEvent, useState } from "react";

interface ManageShoesProps {
    shoes: Shoe[],
    setShoes: React.Dispatch<React.SetStateAction<Shoe[]>>
}

type TypeReplace<T, V> = { [K in keyof T]: T[K] extends Array<infer U> ? TypeReplace<U, V>[] : V };
type Errors = TypeReplace<Shoe, string>;

enum Status {
    IDLE,
    SUBMITTING,
    SUBMITTED
}

const untouchedForm = {
    name: false,
    brand: false,
    price: false,
    size: false,
    date: false
}

const defaultShoe: Shoe = { name: "", brand: "", size: 0, price: 0, date: "" }

function ManageShoes({ shoes, setShoes }: ManageShoesProps) {
    // The state is watched by React so that it knows when to re-render the screen
    const [newShoe, setNewShoe] = useState<Shoe>(defaultShoe);
    const [touched, setTouched] = useState(untouchedForm);
    const [status, setStatus] = useState<Status>(Status.IDLE);
    const { name, brand, size, price, date } = newShoe;

    function onChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        setNewShoe({ ...newShoe, [event.target.id]: event.target.value });
    }

    function onBlur(event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLSelectElement>) {
        setTouched({ ...touched, [event.target.id]: true });
    }

    function validate() {
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
        return currentErrors;
    }

    const errors = validate();
    const isValid = Object.keys(errors).length === 0;

    function getErrorForName(name: keyof Shoe) {
        return touched[name] || status === Status.SUBMITTED
            ? errors[name]
            : undefined;
    }
        return (
        <>
            <h1>Everkicks: Manage Shoes</h1>
            <section>
                <h2>Add Shoe</h2>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setStatus(Status.SUBMITTING);
                    if (! isValid) {
                        setStatus(Status.SUBMITTED);
                        return;
                    }
                    setShoes([...shoes, newShoe]);
                    setNewShoe(defaultShoe);
                    setTouched(untouchedForm);
                }}>
                    <SelectInput
                        id="brand" value={brand} label="Brand" onChange={onChange} onBlur={onBlur}
                        options={[
                            { value: "", label: "Select brand" },
                            { value: "Nike", label: "Nike" },
                            { value: "Adidas", label: "Adidas" },
                            { value: "British Knights", label: "British Knights" }
                        ]}
                        error={getErrorForName("brand")}
                    />
                    <TextInput
                        id="name"
                        value={name}
                        label="Shoe name"
                        onChange={onChange}
                        onBlur={onBlur}
                        type="text"
                        error={getErrorForName("name")}
                    />
                    <TextInput
                        id="size"
                        value={size}
                        label="Shoe size"
                        onChange={onChange}
                        onBlur={onBlur}
                        type="number"
                        step="0.5"
                        error={getErrorForName("size")}
                    />
                    <TextInput
                        id="price"
                        value={price}
                        label="Price"
                        onChange={onChange}
                        onBlur={onBlur}
                        type="number"
                        step="0.01"
                        error={getErrorForName("price")}
                    />
                    <TextInput
                        id="date"
                        value={date}
                        label="Release Date"
                        onChange={onChange}
                        onBlur={onBlur}
                        type="date"
                        error={getErrorForName("date")}
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
