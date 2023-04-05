import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import epic from '../assets/epiclogo.jpg';
import LoginModal from './LoginModal';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'rgb(42, 43, 43)',
    height: '60px'
  },
  logo: {
    marginRight: theme.spacing(4)
  },
  navButton: {
    color: 'RGB(139 148 148)',
    fontSize: '13px',
    fontFamily: 'Open Sans, sans-serif',
    textTransform: 'uppercase',
    marginRight: theme.spacing(4),
    textDecoration: 'none',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
  },
  navSignin: {
    fontFamily: 'Open Sans, sans-serif',
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  signInButton: {
    padding: '8px 12px',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    marginLeft: theme.spacing(1),
    fontSize: '13px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
  }
}));

function Header() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.logo}>
          <img src={epic} alt="Epic Games logo" height="50" />
        </div>
        <Link to="/store" className={classes.navButton}>
          Store
        </Link>
        <Link to="/download" className={classes.navButton}>
          Download
        </Link>
        <Link to="/support" className={classes.navButton}>
          Support
        </Link>
        <Link to="/unreal-engine" className={classes.navButton}>
          Unreal Engine
        </Link>
        <div className={classes.navSignin} onClick={() => setOpenModal(true)}>

          <div className={classes.signInButton}>Sign In</div>
        </div>
        <LoginModal open={openModal} onClose={handleCloseModal} />
      </Toolbar>
    </div>
  );
}

export default Header;
