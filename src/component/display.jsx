import React from "react";
import { UsedataState } from "../DataStatecontext";


function Display() {

    const data = UsedataState()[0];
    return (
        <div>
            <h2>Display</h2>
            {data.map(item => (
                <div key={item.id}>
                    <img src={item.src} />
                    <h3>{item.ttl}</h3>
                    <p>{item.day}</p>
                </div>
            ))}
        </div>
    );
}

export default Display;
