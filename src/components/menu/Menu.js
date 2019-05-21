import React from 'react';
import { connect } from 'react-redux';
import {userActions} from "../../_actions/user.actions";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pushPreferences: '',
        };
        this.handleLoad();
    };

    handleLoad(e) {
        const { dispatch } = this.props;
        dispatch(userActions.menu());
    }

    render(){
        const loading = (<div>Loading...</div>);

        const { menuing } = this.props;

        let content = JSON.parse(localStorage.getItem("drinks")).map( function(res) {
            return <div>{ res.name + res.size + res.price }</div>
        });
        console.log(content);


        // content[0] = <div>Hello</div>;
        // content[1] = <div>Hi</div>;

        return(
            <div className="col-md-6 col-md-offset-3" style = {{height:"100vh"}}>
                <h2>Menu</h2>
                <div>
                    {content.length ? content : loading}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { menuing } = state.readmenu;
    return {
        menuing
    };
}

const connectedMenuPage = connect(mapStateToProps)(Menu);
export { connectedMenuPage as Menu };