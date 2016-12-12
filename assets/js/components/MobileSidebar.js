var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var MobileSidebar = React.createClass({
    render: function() {
        var style = { height: 140 }
        var imgStyle = { marginTop: 10, marginLeft: 3, height: 20 }
        var linkStyle = { marginLeft: 7 }
        return (
            <div>
                <div>&nbsp;</div>
                <a href="#" style={{margin: 9}} data-activates="mobile-menu" className="button-collapse">
                    <i className="material-icons">menu</i>
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
                        <img src='/static/images/cv.png' style={{margin: "10px 3px 0 3px", height: 20}} /> Resume
                    </a>
                </ul>
            </div>
            )
    }
});

module.exports = MobileSidebar;
