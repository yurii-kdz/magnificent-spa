import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles( theme =>({
    table: {
        borderCollapse: "separate",
        borderSpacing: theme.spacing(0, 3),
    },
    root: {
        minWidth: 1055,
    },
    dots: {
        cursor: "pointer",
        textDecoration: "none",
    },
    dot: {
        display: "block",
        borderRadius: "50%",
        marginRight: theme.spacing(0.5),
        background: theme.palette.grey.A700,
        height: "5px",
        width: "5px"
    },
    ul: {
        fontSize: "16px",
        "& li" : {
            "& button" : {
                background: theme.palette.grey[100],
                color: theme.palette.primary.main,
                fontWeight: 700
            }
        }
    }
}));

export default useStyles;