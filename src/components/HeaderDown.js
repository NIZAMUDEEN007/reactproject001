import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-Start',
    paddingLeft: '189px',
    paddingTop: '25px'
  },
  item: {
    marginRight: theme.spacing(4),
    fontFamily: 'Open Sans, sans-serif',
    color: 'RGB(139 148 148)'
  },
}));

function HeaderDown() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <TextField
        variant="outlined"
        placeholder="Search Games"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          classes: { notchedOutline: classes.notchedOutline },
          style: { background: 'rgb(42,43,43)', borderRadius: '20px', paddingLeft: '10px' ,color: 'RGB(139 148 148)' }
        }}
        className={classes.item}
        onFocus={(e) => {
          e.target.style.outline = 'none';
        }}
      />
      <div className={classes.item}>Discover</div>
      <div className={classes.item}>Browse</div>
      <div className={classes.item}>News</div>
    </Toolbar>
  );
}

export default HeaderDown;
