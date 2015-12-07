import React from 'react';
import ReactDOM from 'react-dom'
require('./dorpdown.scss');
class DorpDown extends React.Component {
    constructor(porps){
        super(porps);
        this.state = {
            loading: '',
            elemStyle: {},
            loadStyle: {}
        };
    }
    componentDidMount(){
        let elem = ReactDOM.findDOMNode(this);

        let options = {
            scrollY:0,
            loadH: 68,
            isScrolling: true
        }
        let moveH = 0;
        let reset = (elem) => {
            this.setState({
                elemStyle: {webkitTransform: 'translate3d(0, 0, 0)',
                    webkitTransitionDuration: '300ms'}
            })
            moveH = 0;
            setTimeout(function(){
                elem.removeEventListener('touchmove', defaults, false);
                this.setState({
                    loading: ''
                })
            }.bind(this), 300)
        }
        let transShow = (moveH) =>{

            if (moveH > 68) {
                this.setState({
                    loadStyle: {webkitTransform: 'rotate(0deg)'}
                })
            } else {
                this.setState({
                    loadStyle: {webkitTransform: 'rotate(180deg)'}
                })
            }
        }
        let release = (elem) => {

            if (moveH > 68) {

                this.setState({
                    elemStyle: {webkitTransform: 'translate3d(0, 68px, 0)',
                        webkitTransitionDuration: '300ms'}
                })
                elem.addEventListener('touchmove', defaults, false);
                this.props.callback(reset, elem);
                this.setState({
                    loading: 'loading'
                })

            } else {
                reset(elem);
                this.setState({
                    elemStyle: {webkitTransitionDuration: '300ms'}
                })
            }
        }

        function defaults(event) {
            event.preventDefault();
            event.stopPropagation();
        }

        elem.addEventListener('touchstart', (e) => {
            options.scrollY = e.touches[0].pageY;

            options.isScrolling = true;
            if (document.body.scrollTop >= 3) {
                options.isScrolling = false;
            }
        }, false);
        elem.addEventListener('touchmove', (e) => {
            moveH = e.touches[0].pageY - options.scrollY;

            if (moveH > 0 && options.isScrolling) {
                moveH = moveH / (1 + moveH / document.body.clientHeight );
                transShow(moveH)
                this.setState({
                    elemStyle: {webkitTransform: 'translate3d(0, ' + moveH + 'px, 0)'}
                })
                e.preventDefault();
            }
        }, false)
        elem.addEventListener('touchend', function(){

            if (moveH > 0 && options.isScrolling) {
                release(this)
            }
        })


    }
    render(){
        return (
            <div className="dorp-down" style={this.state.elemStyle}>
                <div className="load"><span className={this.state.loading} style={this.state.loadStyle}></span></div>

                <div className="" ref="main" >{this.props.children}</div>
            </div>
            )
    }
}
DorpDown.propTypes = {
    callback: React.PropTypes.func
}
export default DorpDown;