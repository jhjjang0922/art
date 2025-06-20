import React from "react";
import { UsedataState } from "../DataStatecontext";
import DisplayTopBar from "./DisplayTopBar";

function Display() {

    const data = UsedataState()[0];
    return (
        <div>
            <DisplayTopBar />
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
