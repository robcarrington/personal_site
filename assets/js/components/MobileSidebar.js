var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var MobileSidebar = React.createClass({
    render: function() {
        var style = { height: 140 }
        var sideStyle = { marginTop: 150, paddingRight:15, borderStyle: 'solid', borderWidth: '0 1px 0 0', 
                          borderColor: '#e9e9e9' }
        var nameStyle = { fontSize: 20, textTransform: 'uppercase', color: 'white', 
                          backgroundColor: '#FF5B68', padding: 20, display: 'none', fontWeight: 100 }
        var linkStyle = { marginBottom: -5, fontSize: 13, fontWeight: 300, textTransform: 'uppercase', display: 'block' }
        var imgStyle = { marginTop: 10, marginLeft: 3, height: 20 }
        return (
            <div>
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
            )
    }
});

module.exports = MobileSidebar;
