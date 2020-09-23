import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    table: {
        borderCollapse: "separate",
        borderSpacing: "0 20px",
    },
    tableCell: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "19px",
        color: "#2C5282",
        padding: "16px 0 26px 0"
    },
    button: {
        background: "#2A4365",
        borderRadius: "5px",
        width: "135px",
        height: "42px",
        color: "#ffffff",
        textTransform: "none",
    },
    tableContainer: {
        minWidth: 1055,
        width: '90%',
        minHeight: 579,
        margin: '0 auto',
        boxShadow: 'none',
    },
    row: {
        height: "100px",
        background: "#F7FAFC",
        padding: "0 30px 0 49px",
    },
    cell: {
        padding: "16px 0",
        border: "none",
        "&:last-child": {
            width: "100px",
        }
    },
    status: {
        border: "2px solid #9ae6b4",
        borderRadius: "50px",
        color: "#9ae6b4",
        width: "120px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&.Scheduled": {
            border: "2px solid #F6AD55",
            color: "#F6AD55"
        },
        "&.Draft": {
            border: "2px solid #FC8181",
            color: "#FC8181"
        },
        "&.Published": {
            border: "2px solid #9ae6b4",
            color: "#9ae6b4",
        }
    },
    stats: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "23px",
        color: "#2A4365",
    },
    views: {
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#A0AEC0",
        margin: "0 9px 4px 7px"
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    dots: {
        cursor: "pointer",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
    },
    dot: {
        display: "block",
        borderRadius: "50%",
        marginRight: "5px",
        background: "#718096",
        height: "5px",
        width: "5px"
    },

    pagination: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 41px",
        fontSize: "16px"
    },
    overrides: {
        MuiPaginationItem: {
            text: {
                backgroundColor: "red",
            }
        }
    },
    ul: {
        "& li" : {
            "& button" : {
                background: "#e2e8f0",
                color: "#2c5282",
                fontWeight: 700
            }
        }
    }
});

export default useStyles;