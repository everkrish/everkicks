import { CSSProperties, MouseEvent, useState } from "react";

import { DbShoe, Shoe } from "src/types/types";

interface ShoeListProps {
    shoes: DbShoe[];
}

export function ShoeList({ shoes }: ShoeListProps) {

    return (
        <ul style={{ listStyleType: "none", display: "flex", padding: 0 }}>
            {shoes.map((shoe) =>
                <li key={shoe.id}>
                    <Article shoe={shoe} />
                </li>)}
        </ul>
    );
}

function Article({ shoe }: { shoe: Shoe }) {
    const [style, setStyle] = useState<CSSProperties>({
        margin: "20px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        padding: "16px",
        backgroundColor: "rgba(0,255,255,0.2)"
    });

    function MouseOver(event: MouseEvent<HTMLDivElement>) {
        setStyle({ ...style, backgroundColor: "rgba(0,255,255,0.5)" });
    }

    function MouseOut(event: MouseEvent<HTMLDivElement>) {
        setStyle({ ...style, backgroundColor: "rgba(0,255,255,0.2)" });
    }

    return (
        <article style={style} onMouseEnter={MouseOver} onMouseLeave={MouseOut}>
            <h3> {shoe.brand + " " + shoe.name} </h3>
            <p style={{ color: "green", fontWeight: "bold" }}>${shoe.price}</p>
            <br/>
            <p>Size: {shoe.size}</p>
            <p>Released: <time dateTime={shoe.date}>{shoe.date}</time></p>
        </article>
    );
}