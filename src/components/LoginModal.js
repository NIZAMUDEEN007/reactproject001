import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoginForm from './LoginForm';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    fontFamily: 'Brutual, sans-serif',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function LoginModal(props) {
  const classes = useStyles();
  const { open, handleClose } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">SIGN IN</h2>
        <p id="simple-modal-description">Enter your login credentials to sign in.</p>
        <LoginForm/>
      </div>
    </Modal>
  );
}

export default LoginModal;
