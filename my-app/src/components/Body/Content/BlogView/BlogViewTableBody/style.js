import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles( theme =>({
    root: {
        height: "32px",
        textTransform:'capitalize',
    },

    scheduled: {
        color: theme.palette.warning.main,
        marginRight: theme.spacing(26),
    },
    draft: {
        color: theme.palette.error.main,
        marginRight: theme.spacing(26),
    },
    published: {
        color: theme.palette.success.main,
        marginRight: theme.spacing(26),
    },
    views: {
        fontSize: "14px",
        color: "#A0AEC0",
        margin: theme.spacing(0, 1)
    },
    stats: {
        fontWeight: "bold",
        fontSize: "20px",
        color: theme.palette.primary.main,
    },
    row: {
        height: "100px",
        background: "#F7FAFC",
        padding: theme.spacing(0, 4, 0, 6)
    },
    cell: {
        padding: theme.spacing(2, 0),
        border: "none",
        "&:last-child": {
            width: "100px",
        }
    },
}));

export default useStyles