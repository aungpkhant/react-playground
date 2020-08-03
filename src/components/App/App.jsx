import React, { useLayoutEffect } from "react";
import muiTheme from "./muiTheme";
import GlobalStyle from "./GlobalStyle";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "../Header/Header";
import { withRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import constants from "../constants";
import Home from "../Home/Home";
import DirectStateMutation from "../DirectStateMutation/DirectStateMutation";
import ReactKeys from "../ReactKeys/ReactKeys";

const StyledDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const StyledBodyDiv = styled.div`
    padding: 25px;
    flex-grow: 1;

    @media only screen and (min-width: ${constants.appWidth}px) {
        width: ${constants.appWidth}px;
        margin: auto;
    }
`;

const App = ({ location }) => {
    // scroll back to top when navigating to new pages
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, muiTheme)}>
            <>
                <GlobalStyle />
                <StyledDiv>
                    <Header />
                    <StyledBodyDiv>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={DirectStateMutation}
                            />
                            <Route
                                exact
                                path="/use-state"
                                component={DirectStateMutation}
                            />
                            <Route
                                exact
                                path="/react-keys"
                                component={ReactKeys}
                            />
                        </Switch>
                    </StyledBodyDiv>
                </StyledDiv>
            </>
        </MuiThemeProvider>
    );
};

export default withRouter(App);
