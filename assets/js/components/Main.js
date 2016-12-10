var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('./Sidebar.js');
var Blog = require('./Blog.js');
var Link = require('react-router').Link;

var Main = React.createClass({
    render: function() {
            var style = { height: 145 }
            var imgStyle = { marginTop: 10, marginLeft: 3, height: 20 }
            var routeStyle = { marginLeft: 7, fontSize: 18 }
            var linkStyle = { fontSize: 18 }
            return (
                <div className="row">
                    <div className="col l3 hide-on-med-and-down">
                        <Sidebar />
                    </div>
                    <div className="col m12 l9">
                        <div style={style} className="hide-on-med-and-down"/>
                        <div className="row hide-on-med-and-up">
                        <div>&nbsp;</div>
                        <a href="#" style={{margin: 9}} data-activates="mobile-menu" className="button-collapse">
                            <i style={{ fontSize: 35 }} className="material-icons">menu</i>
                        </a>
                        <ul className="side-nav right" id="mobile-menu">
                            <div>&nbsp;</div>
                            <li><Link style={routeStyle} to='/about' >About</Link></li>
                            <li><Link style={routeStyle} to='/blog' >Blog</Link></li>
                            <li><Link style={routeStyle} to='/projects' >Projects</Link></li>
                            <div>&nbsp;</div>
                            <a style={linkStyle} href='http://www.github.com/robcarrington'>&nbsp;
                                <img src='/static/images/github.png' style={imgStyle}/> GitHub
                            </a>
                            <a style={linkStyle} href='https://www.linkedin.com/in/robert-carrington-85073071'>&nbsp;
                                <img src='/static/images/linkedin.png' style={imgStyle}/> LinkedIn
                            </a>
                            <a style={{margin: 5, fontSize: 18}} href='https://www.dropbox.com/s/1sx23hcc0ox3ffx/rob_carrington_resume.pdf?dl=0'>
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
