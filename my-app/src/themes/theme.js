import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2A4365",
        },
        secondary: {
            main: "#D53F8C",

        }
    },
    shape: {
        borderRadius: 5
    },
    breakpoints: {
        values: {
            sm: 302
        },
    },
    typography: {
        subtitle1: {
            fontSize: '20px',
            color: '#ffffff',
        },
        subtitle2: {
            fontSize: '20px',
            color: '#63b3ed'
        },
        h3: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "21px",
            color: "#2A4365",
            marginBottom: "4px",
            marginLeft: "30px"
        },
        h5: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#A0AEC0",
            marginLeft: "30px"
        },
        h6: {
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "21px",
            color: '#63b3ed',
        }
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: "inherit",
                boxShadow: "none"
            },
        },
        MuiAvatar: {
            root: {
                height: '52px',
                width: '52px',
                textTransform: 'none'
            }
        },
        MuiButton: {
            sizeSmall: {
                height: '32px',
                width: '82px',
                fontSize: '11px',
            },
            sizeLarge: {
                background: "#2A4365",
                borderRadius: "5px",
                width: "135px",
                height: "42px",
                color: "#ffffff",
                textTransform: "none",
            }
        },
        MuiListItem: {
            gutters: {
                display: "flex",
                paddingLeft: "0",
                paddingRight: "0"
            }
        },
        MuiTableCell: {
            head: {
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#2C5282",
                padding: "16px 0 26px 0"
            }
        }
    }
});

export default theme;