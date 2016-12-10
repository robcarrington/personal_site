var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;


var BlogpostDetail = React.createClass({
    componentDidMount: function(){
        url_array = window.location.href.split('/')
        post_id = url_array[url_array.length-1]
        $.ajax({
            url: '../api/blog/post/'+post_id,
            datatype: 'json',
            cache: 'false',
            success: function(data){
                this.setState({data: data});
            }.bind(this)
        })
    },
    getInitialState: function(){ return {data: []}; },
    render: function() {
        var cardStyle = { minWidth: 400, maxWidth: 800 }
        var titleStyle = {fontSize: 30, fontWeight: 200}
        var subtitleStyle = { fontSize: 18, fontWeight: 400 }
        var bodyStyle = { whiteSpace: "pre-wrap" }
        return (
                <div className="col s12" style={{marginTop: -4}}>
                    <div style={cardStyle} >
                        <span style={titleStyle}>{this.state.data.title}</span>
                        <p style={subtitleStyle}>{this.state.data.subtitle}</p>
                        <p style={bodyStyle}>{this.state.data.body}</p>
                        <br />
                    </div>
                </div>
            )
    }
});

module.exports = BlogpostDetail;
