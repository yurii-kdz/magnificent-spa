import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles (theme => ({
    item: {
      width: '100%',
        display: 'flex',
    },
    label: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(3)
    },
    field: {
        width: '100%',
        background: '#edf2f7',
        borderRadius: '5px',
    },
    formGroup: {
        background: '#ffffff',
        padding: theme.spacing(4, 4, 3)
    }
}));

export default useStyles;