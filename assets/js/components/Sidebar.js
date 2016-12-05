var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Sidebar = React.createClass({
    render: function() {
        var sideStyle = { marginTop: 150, paddingRight:15, borderStyle: 'solid', borderWidth: '0 1px 0 0', 
                          borderColor: '#e9e9e9' }
        var nameStyle = { fontSize: 20, textTransform: 'uppercase', color: 'white', 
                          backgroundColor: '#FF5B68', padding: 20, display: 'none', fontWeight: 100 }
        var linkStyle = { marginBottom: -5, fontSize: 13, fontWeight: 300, textTransform: 'uppercase', display: 'block' }
        var imgStyle = { marginTop: 10, marginLeft: 3, height: 20 }
        return (
            <div>
            <div className='fixed right-align hide-on-med-and-down' style={sideStyle}> 
                <span style={nameStyle}>Rob Carrington</span>
                <Link style={linkStyle} to='/about'>about</Link><br/>
                <Link style={linkStyle} to='/blog'>blog</Link><br/>
                <Link style={linkStyle} to='/projects'>projects</Link><br/>
                <a href='http://www.github.com/robcarrington'>
                    <img src='/static/images/github.png' style={imgStyle}/>
                </a>
                <a href='https://www.linkedin.com/in/robert-carrington-85073071'>
                    <img src='/static/images/linkedin.png' style={imgStyle}/>
                </a>
                <a href='https://www.dropbox.com/s/1sx23hcc0ox3ffx/rob_carrington_resume.pdf?dl=0'>
                    <img src='/static/images/cv.png' style={imgStyle} />
                </a>
            </div>
            </div>
            )
    }
});

module.exports = Sidebar;
