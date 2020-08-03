import React, { useState } from "react";
import styled from "styled-components";
import constants from "../constants";
import { List, ListItem, ListItemText } from "@material-ui/core";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledButton = styled.button`
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: ${constants.defaultPrimaryColor};
`;

const GoodButton = styled(StyledButton)`
    border: 2px solid ${constants.colorSuccess};
    color: ${constants.colorSuccess};
`;

const BadButton = styled(StyledButton)`
    border: 2px solid ${constants.colorDanger};
    color: ${constants.colorDanger};
`;

const InformationComponent = () => {
    return (
        <div>
            <h3>Changing React State</h3>
            <p>
                State should not be modified directly. Doing so is an
                anti-pattern and will lead to bugs as React will not know to
                re-render
            </p>
        </div>
    );
};

const ListItemComponent = ({ value }) => {
    return (
        <ListItem>
            <ListItemText>{`${value}`}</ListItemText>
        </ListItem>
    );
};

let id = 0;

const createListItem = () => {
    return {
        id: ++id,
        value: Math.random(10000000000000),
    };
};

const DirectStateMutation = () => {
    const [itemList, setItemList] = useState([]);

    const handleGoodClick = () => {
        const newItem = createListItem();
        setItemList((prevState) => [...prevState, newItem]);
    };

    const handleBadClick = () => {
        const newItem = createListItem();
        itemList.push(newItem);
    };

    return (
        <StyledDiv>
            <InformationComponent />
            <GoodButton
                onClick={() => handleGoodClick()}
                style={{ marginBottom: "1rem" }}
            >
                Add item immutably
            </GoodButton>
            <BadButton onClick={() => handleBadClick()}>
                Add item mutably
            </BadButton>
            <List>
                {itemList.map((item) => (
                    <ListItemComponent {...item} key={item.id} />
                ))}
            </List>
        </StyledDiv>
    );
};

export default DirectStateMutation;
