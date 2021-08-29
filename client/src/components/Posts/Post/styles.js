import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    card: {
        padding: '15px',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    postEntry: {
        padding: '3px',
    },
    image: {
        height: '250px',
        borderRadius: '7px',
    },
}))