var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Blogpost = React.createClass({
    render: function() {
        var cardStyle = { width: 320, height: 300, backgroundColor: this.props.color }
        return (
            <div className="col s12 m5">
                <Link to={'blog/'+this.props.id}>
                <div className="card small" style={ cardStyle }>
                    <div className="card-content white-text" style={{padding: 35}}>
                        <span className="card-title" style={{fontSize: 28, fontWeight: 200}}>
                            {this.props.title}
                        </span>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <p style={{fontSize: 20}}>{this.props.subtitle}</p>
                   </div>
                </div>
                </Link>
            </div>
            )
    }
});

module.exports = Blogpost;
