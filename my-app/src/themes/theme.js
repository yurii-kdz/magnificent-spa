/*import React from 'react';*/
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
    }
});

export  default  theme;