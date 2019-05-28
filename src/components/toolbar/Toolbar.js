import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import { history } from "../../_helpers/history";
import './Toolbar.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

};

class ToolbarApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        classes.name = localStorage.getItem('user');
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Router history={history}>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                <Link to="/" className="Home">CoffeeBuzz</Link>
                            </Typography>
                         <Link to="/menu" className="Link">Drinks</Link>
                            <Link to="/showfood" className="Link">Food</Link>
                        </Router>
                        <Button color="inherit">{classes.name}</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

ToolbarApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolbarApp);