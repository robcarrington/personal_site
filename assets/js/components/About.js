var React = require('react');
var ReactDOM = require('react-dom');

var About = React.createClass({
    render: function() {
        var linkStyle = { borderBottom: '1px dotted #000' }
        var textStyle = { fontSize: 12, maxWidth: 400, minWidth: 300 }
        var imgStyle = { width: 265, height: 265 }
        return (
            <div className="row">
                <div className="col s10 m5" style={textStyle}>
                    <span style={{fontWeight: 500}}>Hi, I'm Rob.</span> I like crunching data and building web apps with Python. I live in Austin, TX and do that flavor of work at <a style={linkStyle} href="http://www.q2ebanking.com">Q2&nbsp;eBanking</a>. On the side I hack on iOS and React.js <a style={linkStyle} href="/projects">projects.</a>
                    <br/><br/>
                    <span style={{fontWeight: 500}}>Also excited about:</span><br/>
                    education technology <br/>
                    podcasts <br/>
                    skateboarding<br/>
                    comic strips <br/>
                    stoic philosophy <br/><br/>
                </div>
                <div className="col s10 m5">
                    <div className="card" style={imgStyle}>
                         <img style={imgStyle} src="/static/images/backyard.jpg" />
                    </div>
                </div>
            </div>
            )
    }
});

module.exports = About;
