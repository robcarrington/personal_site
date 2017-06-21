var React = require('react');
var ReactDOM = require('react-dom');

var About = React.createClass({
    render: function() {
        var linkStyle = { borderBottom: '1px dotted #000' }
        var textStyle = { fontSize: 18, marginRight: 18, maxWidth: 400, minWidth: 300 }
        var imgStyle = { maxWidth: 320, maxHeight: 320 }
        return (
            <div className="row">
                <div className="col s12 m6 l6" style={textStyle}>
                    <span style={{fontWeight: 500}}>Hi, I'm Rob.</span> I like crunching data and building web apps with Python. I live in Austin, TX and do that flavor of work at <a style={linkStyle} href="http://www.q2ebanking.com">Q2&nbsp;eBanking</a>. On the side I fiddle with iOS, React.js, and Elm projects.
                    <br/><br/>
                    <span style={{fontWeight: 500}}>Also excited about:</span><br/>
                    education technology <br/>
                    podcasts <br/>
                    skateboarding<br/>
                    comic strips <br/>
                    stoic philosophy <br/><br/>
                </div>
                <div style={{marginRight: 18}} className="col s12 m6 l6">
                    <div className="card" style={imgStyle}>
                         <img style={imgStyle} src="/static/images/backyard.jpg" />
                    </div>
                </div>
            </div>
            )
    }
});

module.exports = About;
