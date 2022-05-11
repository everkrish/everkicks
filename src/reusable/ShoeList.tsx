import { MouseEvent } from "react";

import { Shoe } from "src/types/types";

interface ShoeListProps {
    shoes: Shoe[];
}

export function ShoeList({ shoes }: ShoeListProps) {
    const style: any = {
        margin: "20px"

    };
    style["box-shadow"] = "0 4px 8px 0 rgba(0,0,0,0.2)";
    style["transition"] = "0.3s";
    style["padding"] = "16px";

    function MouseOver(event: MouseEvent<HTMLDivElement>) {
        // @ts-ignore
        event.target.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2);';
    }
    function MouseOut(event: MouseEvent<HTMLDivElement>){
        // @ts-ignore
        event.target.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    }

    return (
        <ul style={{ listStyleType: "none", display: "flex", padding: 0 }}>
            {shoes.map((shoe) =>
                <li>
                    <article style={style}>
                        <h3> { shoe.brand + " " + shoe.name } </h3>
                        <p style={{ color: "green", fontWeight: "bold" }}>${shoe.price}</p>
                        <br/>
                        <p>Size: {shoe.size}</p>
                        <p>Released: <time dateTime={shoe.date}>{shoe.date}</time></p>
                    </article>
                </li>)}
        </ul>
    );
}