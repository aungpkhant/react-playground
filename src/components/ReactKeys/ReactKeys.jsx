import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { List, ListItem } from "@material-ui/core";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListItemComponent = ({ id, value, clickHandler }) => {
    return (
        <ListItem>
            <button
                onClick={() => clickHandler(id)}
                style={{ marginRight: "0.5rem" }}
            >
                Remove
            </button>
            <input className="input-form" style={{ marginRight: "0.5rem" }} />
            <p>{value}</p>
        </ListItem>
    );
};

const initList = [
    {
        id: 1000,
        value: "React",
    },
    {
        id: 1001,
        value: "Node",
    },
    {
        id: 1003,
        value: "Express",
    },
    {
        id: 1004,
        value: "MongoDB",
    },
    {
        id: 1005,
        value: "AWS",
    },
];

const fillInputs = () => {
    let num = 1;
    const inputs = document.getElementsByClassName("input-form");
    for (let input of inputs) {
        input.value = num;
        num++;
    }
};

/* 
Anti Pattern: Using index as react key
Consequences: It may break the application and display wrong data
Exception:
The list and items are static and do not change
The items in list have no ids
The list is never filtered or reordered
If all three of these conditions are met, index may be used as key

*/

const InformationComponent = () => {
    return (
        <div>
            <h3>Using Index As Key</h3>
            <p>
                Whenever possible we should avoid using index as keys to render
                a list of components. React uses keys to identify which items
                have been changed/added/removed. Doing so can lead to bugs in
                the UI as shown below. Even though the correct item was removed,
                the value in the input field is wrong.
                <br />
                Using index as key should be a last resort and only if the
                following conditions are met: The list is static and will not
                change. The list is never reordered nor filtered. The list
                elements have no natural IDs.
            </p>
        </div>
    );
};

const ReactKeys = () => {
    const [indexList, setIndexList] = useState(initList);
    const [keyList, setKeyList] = useState(initList);

    const removeItemIndexList = (id) => {
        setIndexList(indexList.filter((item) => item.id !== id));
    };
    const removeItemKeyList = (id) => {
        setKeyList(keyList.filter((item) => item.id !== id));
    };

    useEffect(() => {
        fillInputs();
    }, []);

    return (
        <StyledDiv>
            <InformationComponent />
            <List>
                <h3>Using ID as key</h3>

                {keyList.map((item, index) => (
                    <ListItemComponent
                        {...item}
                        key={item.id}
                        clickHandler={removeItemKeyList}
                    />
                ))}
            </List>
            <List>
                <h3>Using index as key</h3>

                {indexList.map((item, index) => (
                    <ListItemComponent
                        {...item}
                        key={index}
                        clickHandler={removeItemIndexList}
                    />
                ))}
            </List>
        </StyledDiv>
    );
};

export default ReactKeys;
