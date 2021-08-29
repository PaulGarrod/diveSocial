import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
        padding: '25px 15px',    
    }, 
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginTop: '20px'
    },
    fileInput: {
        marginTop: '20px'
    },
    button: {
        marginTop: '20px',
        borderRadius: '30px'
    }
}))