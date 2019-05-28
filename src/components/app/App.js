import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from "../../_helpers/history";
// import { alertActions } from "../../_actions/alert.actions";
import { Menu } from "../menu/Menu";
import { Login } from "../login/Login";
import { Register } from "../register/Register";
import {Menufood} from "../menufood/Menufood";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   const { dispatch } = this.props;
  // }

  render() {
    const { alert } = this.props;

    return(
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <div>
                            <Route exact path="/" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/menu" component={Menu} />
                            <Route path="/showfood" component={Menufood} />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
  }

}


function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
