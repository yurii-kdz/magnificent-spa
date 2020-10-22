import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles( theme =>({
    root: {
        height: "32px",
        textTransform:'capitalize',
        borderRadius: 50,
        maxWidth: '120px',
    },
    scheduled: {
        color: "#fff",
        marginRight: theme.spacing(26),
        background: theme.palette.warning.main
    },
    draft: {
        color: theme.palette.error.main,
        marginRight: theme.spacing(26),
    },
    published: {
        color: "#fff",
        background: theme.palette.success.main,
        marginRight: theme.spacing(26),
    },
    row: {
        height: "100px",
        background: theme.palette.grey[100],
        padding: theme.spacing(0, 4, 0, 6)
    },
    cell: {
        padding: theme.spacing(2, 0),
        fontSize: '14px',
        lineHeight: '16px',
        color: '#2A4365',
    },
    author: {
        fontSize: '14px',
        lineHeight: '16px',
        color: '#2A4365',
        marginRight: theme.spacing(3),
    },
    role: {
        background: '#2C5282',
        borderRadius: '50px',
        padding: theme.spacing(1.5,2),
        textTransform:'capitalize',
        color: '#fff',
        display: 'inline-block'
    },
}));

export default useStyles