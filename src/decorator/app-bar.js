import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../theme';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: theme.mixins.toolbar
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar color="default" position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
           {props.mess}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </div>
    
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SimpleAppBar);
