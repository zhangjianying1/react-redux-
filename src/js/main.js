import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Router, Route, Link} from 'react-router';
//import history from 'history';
import Confirm from './components/confirm/Confirm';
import ExchangeCoupon from './containers/exchangecoupon/ExchangeCoupon';
import combineReducer from './reducers/reducer';
import Loading from './components/loading/Loading';
let store = createStore(combineReducer);
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory();

class App extends React.Component{
    render(){
        return (

            <div className="main">
                <Link to="/test">test</Link>
                <Link to="/exchangecoupon/33333333">exchangecoupon</Link>
                {this.props.children}
                <Loading />
                <Confirm />
            </div>
            )

    }
};
class Test extends React.Component{
    render(){
        return (
            <div>rrrr</div>
            )
    }
};
let routers = (
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="test" component={Test} />
            <Route path="exchangecoupon/:exchangecode" component={ExchangeCoupon} />
        </Route>
    </Router>
    );
render(<Provider store={store}>{routers}</Provider>, document.querySelector('#exchangecoupon'));