var React = require('react');
var ReactDOM = require('react-dom');

var Projectpost = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col s12 m12 l12" style={{ maxWidth: 750 }}>
                    <a href={this.props.link_url}>
                        <div className="card">
                            <div className="card-image">
                                <img src={this.props.img_url} />
                            </div>
                            <div className="card-content">
                                <p style={{fontSize: 18}}>{this.props.body}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            )
    }
});

module.exports = Projectpost;
