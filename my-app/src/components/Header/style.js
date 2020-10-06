import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme =>({
    header: {
        backgroundColor: '#2D3748',
        padding: theme.spacing(3,3,2,9),
    },
    avatar: {
        marginLeft: theme.spacing(2)
    },
}));

export default useStyles;