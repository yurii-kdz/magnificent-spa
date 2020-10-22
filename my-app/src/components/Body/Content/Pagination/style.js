import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles (theme => ( {
    tab: {
        height: '40px',
        width: '40px',

        background: theme.palette.grey[300],
        borderRadius: 50,
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    }
}))

export default useStyles;