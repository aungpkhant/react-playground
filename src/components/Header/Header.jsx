import React, { useState } from "react";
import styled from "styled-components";
import constants from "../constants";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Toolbar } from "@material-ui/core";
import ToolbarGroup from "material-ui/Toolbar/ToolbarGroup";
import {
    IconButton,
    List,
    ListItem,
    ListItemText,
    SwipeableDrawer,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import pages from "../pages";

const ToolbarHeader = styled(Toolbar)`
    backdrop-filter: blur(16px);
    background-color: ${constants.defaultPrimaryColorSolid} !important;
    height: 56px !important;
    left: 0;
    top: 0;
    padding: 8px 16px !important;
    position: fixed !important;
    width: 100%;
    z-index: 100;
    box-sizing: border-box;

    & a {
        color: ${constants.primaryTextColor};

        &:hover {
            color: ${constants.primaryTextColor};
            opacity: 0.6;
        }
    }
`;

const VerticalAlignToolbar = styled(ToolbarGroup)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuContent = styled.div`
    background: ${constants.primarySurfaceColor};
    max-width: 300px;
    height: 100%;
    overflow: auto;
    min-width: 220px;
`;

const StyledLink = styled(Link)`
    font-weight: ${constants.fontWeightMedium};
    color: ${constants.textColorPrimary};
    text-transform: uppercase;

    &:hover {
        color: ${constants.textColorPrimary};
        opacity: 0.6;
    }
`;

const DrawerLink = styled(Link)`
    font-weight: ${constants.fontWeightMedium};
    color: ${constants.textColorPrimary}!important;
    text-transform: uppercase;
`;

const AppLogo = () => (
    <StyledLink to="/">
        <span>&lt;&gt; React Playground &lt;/&gt;</span>
    </StyledLink>
);

const Header = () => {
    const [menuIsOpen, setMenuOpen] = useState(false);

    const drawerPages = pages.filter((page) => page.completed === true);

    return (
        <ToolbarHeader>
            <VerticalAlignToolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => setMenuOpen(!menuIsOpen)}
                >
                    <MenuIcon />
                </IconButton>
                <AppLogo />
            </VerticalAlignToolbar>
            <SwipeableDrawer
                open={menuIsOpen}
                onOpen={() => setMenuOpen(true)}
                onClose={() => setMenuOpen(false)}
            >
                <MenuContent>
                    <List>
                        <ListItem
                            style={{ padding: "1rem", marginBottom: "1rem" }}
                        >
                            <AppLogo onClick={() => setMenuOpen(false)} />
                        </ListItem>

                        {drawerPages.map((item) => (
                            <DrawerLink
                                to={item.to}
                                key={item.key}
                                onClick={() => setMenuOpen(false)}
                            >
                                <ListItem>
                                    <ListItemText>{item.label}</ListItemText>
                                </ListItem>
                            </DrawerLink>
                        ))}
                    </List>
                </MenuContent>
            </SwipeableDrawer>
        </ToolbarHeader>
    );
};

export default Header;
