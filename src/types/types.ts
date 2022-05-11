export interface Shoe {
    brand: string;
    name: string;
    size: number;
    price: number;
    date: string;
}

export interface DbShoe extends Shoe {
    id: number;
}