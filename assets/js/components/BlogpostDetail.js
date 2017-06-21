var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;


var BlogpostDetail = React.createClass({
    componentDidMount: function(){
        urlArray = window.location.href.split('/')
        postId = urlArray[urlArray.length-1]
        $.ajax({
            url: '../api/blog/post/'+postId,
            datatype: 'json',
            cache: 'false',
            success: function(data){
                this.setState({data: data});
            }.bind(this)
        })
    },
    getInitialState: function(){ return {data: []}; },
    render: function() {
        var cardStyle = { minWidth: 300, maxWidth: 800 }
        var titleStyle = {fontSize: 30, fontWeight: 200}
        var subtitleStyle = { fontSize: 18, fontWeight: 400 }
        var bodyStyle = { fontSize: 16, marginTop: 50, whiteSpace: "pre-wrap" }
        return (
                <div className="col s12" style={{marginTop: -4}}>
                    <div style={cardStyle} >
                        <span style={titleStyle}>{this.state.data.title}</span>
                        <p style={subtitleStyle}>{this.state.data.subtitle}</p>
                        <div style={bodyStyle}>{this.state.data.body}</div>
                        <a href={this.state.data.link_url}>{this.state.data.link_text}</a>
                        <br />
                    </div>
                </div>
            )
    }
});

module.exports = BlogpostDetail;
