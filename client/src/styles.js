import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContainer: {
        marginTop: '24px',
    },
    appBar: {
        borderRadius: 15,
        margin: '40px 0',
        padding: '40px',
        justifyContent: 'center',
    },
    font: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '2rem',
        margin: '40px'
    },
    image: {
        height: '180px',
        justifyContent: 'center',
        margin: '10px auto',
    },
}));