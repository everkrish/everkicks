import { Shoe } from "src/types/types";

interface ShoeListProps {
    shoes: Shoe[];
}

export function ShoeList({ shoes }: ShoeListProps) {
    return (
        <ul>
            { shoes.map((shoe) => <li>{shoe.brand + " " + shoe.name}</li>) }
        </ul>
    );
}