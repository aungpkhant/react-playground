import React from "react";
import styled from "styled-components";
import pages from "../pages";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InformationComponent = () => {
    return (
        <div>
            <h3>HomePage</h3>
            <p>
                React Playground is a place where I test and expand my
                understanding of React, implement anti-patterns and best
                practices as well as test out new libraries. I believe that
                learning by doing is the best way to learn things and hence this
                project.
            </p>
        </div>
    );
};

const CheckboxLabel = ({ label, completed }) => {
    return (
        <div>
            {completed ? "✔️" : "❌"}
            <label>{label}</label>
        </div>
    );
};

const Home = () => {
    return (
        <StyledDiv>
            <InformationComponent />
            {pages.map((page) => (
                <CheckboxLabel {...page} key={page.key} />
            ))}
        </StyledDiv>
    );
};

export default Home;
