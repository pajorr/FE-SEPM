import React from 'react';
import { connect } from 'react-redux';
import {userActions} from "../../_actions/user.actions";

class Menufood extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pushPreferences: '',
        };
        this.handleLoad();
        this.handleOrder = this.handleOrder.bind(this);
    };

    handleLoad(e) {
        const { dispatch } = this.props;
        dispatch(userActions.menufood());
    }

    handleOrder(order) {
        const { dispatch } = this.props;
        dispatch(userActions.orderfood(order));
    }


    render(){
        const loading = (<div>Loading...</div>);
        const self = this;
        const { menufooding } = this.props;
        let orderId = 0;

        let content = JSON.parse(localStorage.getItem('food')).map( function(res) {
            return <div>
                <div id={orderId}>
                    { res.name + " " + res.price + " " + res.description } </div>
                <div>
                    <img src={res.image} width="200" height="200"/> <button onClick={function(e) {
                    self.handleOrder(res.name);
                }}>Order</button>
                </div>
            </div>
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
    const { menufooding } = state.readmenu;
    return {
        menufooding
    };
}

const connectedMenuPage = connect(mapStateToProps)(Menufood);
export { connectedMenuPage as Menufood };