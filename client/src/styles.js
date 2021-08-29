import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
        borderRadius: 15,
        margin: '30 px 0',
        justifyContent: 'center',
    },
    heading: {
        color: 'rgba(0,183,255,1)',
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