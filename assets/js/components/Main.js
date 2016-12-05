var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('./Sidebar.js');
var Blog = require('./Blog.js');
var Link = require('react-router').Link;

var Main = React.createClass({
    render: function() {
            var style = { height: 145 }
            var imgStyle = { marginTop: 10, marginLeft: 3, height: 20 }
            var linkStyle = { marginLeft: 7 }
            return (
                <div className="row">
                    <div className="col m3 hide-on-small-only">
                        <Sidebar />
                    </div>
                    <div className="col m9 s12">
                        <div style={style} className="hide-on-small-only"/>
                        <div className="row hide-on-large-only">
                        <div>&nbsp;</div>
                        <a href="#" style={{margin: 9}} data-activates="mobile-menu" className="button-collapse">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="side-nav" id="mobile-menu">
                            <div>&nbsp;</div>
                            <li><Link style={linkStyle} to='/about' >About</Link></li>
                            <li><Link style={linkStyle} to='/blog' >Blog</Link></li>
                            <li><Link style={linkStyle} to='/projects' >Projects</Link></li>
                            <div>&nbsp;</div>
                            <a href='http://www.github.com/robcarrington'>&nbsp;
                                <img src='/static/images/github.png' style={imgStyle}/> GitHub
                            </a>
                            <a href='https://www.linkedin.com/in/robert-carrington-85073071'>&nbsp;
                                <img src='/static/images/linkedin.png' style={imgStyle}/> LinkedIn
                            </a>
                            <a style={{margin: 5}} href='https://www.dropbox.com/s/1sx23hcc0ox3ffx/rob_carrington_resume.pdf?dl=0'>
                                <img src='/static/images/cv.png' style={imgStyle} /> Resume
                            </a>
                        </ul>
                    </div>
                        {this.props.children} 
                    </div>
                </div>
            )
    }
});

module.exports = Main;
