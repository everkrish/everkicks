import { rest } from "msw";

export const handlers = [
    rest.get('http://localhost:3001/shoes', (req, res, ctx) => {
        return res(ctx.status(200),
            ctx.json([{
                brand: "Nike",
                name: "Mock 1",
                price: 95,
                size: 7,
                date: "1998-01-01",
                id: 0
            }])
        );
    })
];
