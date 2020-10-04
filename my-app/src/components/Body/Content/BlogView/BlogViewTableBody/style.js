import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles( theme =>({
    root: {
        borderRadius: "50px",
        width: "120px",
        height: "32px",
        textTransform:'capitalize',
    },
    scheduled: {
        color: "#F6AD55",
        border: "2px solid #F6AD55",
    },
    draft: {
        border: "2px solid #FC8181",
        color: "#FC8181"
    },
    published: {
        border: "2px solid #9ae6b4",
        color: "#9ae6b4",
    },
    views: {
        fontSize: "14px",
        color: "#A0AEC0",
        margin: theme.spacing(0, 1)
    },
    stats: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#2A4365",
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