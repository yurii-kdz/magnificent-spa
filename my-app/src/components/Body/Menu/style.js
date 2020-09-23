import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        backgroundColor: '#E5E5E5',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        minHeight: '100vh',
        padding: '72px 55px 153px 78px',
    },
    item: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: "#2C5282",
        margin: "0 0 0 15px",
    },
    img: {
        height: "24px",
        width: "24px",
        marginRight: "13px"
    },
    listItem: {
        padding: '0 0 30px 0',
        display: "flex",

    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: "32px"
    },
})

export default useStyles;