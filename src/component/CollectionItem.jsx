import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const ItemBox = styled.div`
  flex: 1 1 calc(25% - 20px);
`;


function Collection() {
    const data = UsedataState()[2];
    return (
        <div>
            {data.map(item => (
                <ItemBox key={item.id}>
                    <img src={item.src}/>
                    <h3>{item.author}</h3>
                    <p>{item.ttl3}</p>
                    <span>{item.day3}</span>
                </ItemBox>
            ))}
        </div>
    );
}


export default Collection;
