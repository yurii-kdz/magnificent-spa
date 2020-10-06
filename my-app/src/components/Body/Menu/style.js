import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles (theme => ( {
    container: {
        backgroundColor: theme.palette.grey[300],
        padding: theme.spacing(9, 7, 20, 10),
        maxWidth: "300px",
        marginRight: theme.spacing(4),
    },
    primary: {
        fontSize: '1.125rem',
        color: theme.palette.primary.main,
        whiteSpace: "nowrap",
        margin: theme.spacing(0, 0, 0, 2),
    },
    root: {
        padding: theme.spacing(1.5,0)
    },
    img: {
        marginRight: theme.spacing(2)
    },
    list: {
        padding: theme.spacing(2, 0)
    },
}))

export default useStyles;