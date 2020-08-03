import constants from "../constants";

const muiTheme = {
    fontFamily: constants.fontFamily,
    palette: {
        textColor: constants.textColorPrimary,
        primary1Color: constants.colorBlue,
        canvasColor: constants.primarySurfaceColor,
        borderColor: constants.dividerColor,
    },
    tabs: {
        backgroundColor: "transparent",
        textColor: constants.colorMuted,
        selectedTextColor: constants.textColorPrimary,
    },
    button: { height: 38 },
};

export default muiTheme;
