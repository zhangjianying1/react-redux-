import React from 'react';
import {showLoading} from '../../actions/action'
import {connect} from 'react-redux';
class Loading extends React.Component{
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(showLoading(true))
    }
    render(){
        const {loading} = this.props;
        console.log(loading)
        let toggleDisplay = () => {
            return {display: loading ? 'block' : 'none'}
        }
        return (

            <div className="global-loading" style={toggleDisplay()}></div>
            )
    }
}
let init = function (state) {
    return {
        loading: state.showLoading
    }
}
export default connect(init)(Loading);