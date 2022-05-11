import { DbShoe, Shoe } from "src/types/types";

const API_URI = "http://localhost:3001";

export async function getShoes(): Promise<DbShoe[]> {
    const response = await fetch(`${API_URI}/shoes`);
    if (! response.ok) {
        throw response;
    }
    return await response.json();
}

export async function addShoe(shoe: Shoe): Promise<DbShoe> {
    const response = await fetch(`${API_URI}/shoes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shoe)
    });
    if (! response.ok) {
        throw response;
    }
    return await response.json();
}