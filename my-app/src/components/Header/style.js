import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#2D3748',
        padding: '24px 26px 19px 75px'
    },
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    dock: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: '52px',
        width: '52px',
        marginLeft: '18px'
    },
    button: {
        height: '32px',
        width: '82px',
        fontSize: '12px',
        textTransform: 'none'
    }

});

export default useStyles;