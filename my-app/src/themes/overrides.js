const overrides = {
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
};

export default overrides;