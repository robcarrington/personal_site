var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('./Sidebar.js');
var MobileSidebar = require('./MobileSidebar.js');
var Blog = require('./Blog.js');
var Link = require('react-router').Link;

var Main = React.createClass({
    render: function() {
            var style = { height: 140 }
            var imgStyle = { marginTop: 10, marginLeft: 3, height: 20 }
            var linkStyle = { marginLeft: 7 }
            return (
                <div className="row">
                    <div className="col m3 hide-on-small-only">
                        <Sidebar />
                    </div>
                    <div className="col m9 s12">
                        <div style={style} className="hide-on-small-only" />
                        <div className="row hide-on-large-only">
                            <MobileSidebar />
                        </div>
                        {this.props.children} 
                    </div>
                </div>
            )
    }
});

module.exports = Main;
