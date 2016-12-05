var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;


var BlogpostDetail = React.createClass({
    componentDidMount: function(){
        url_array = window.location.href.split('/')
        post_id = url_array[url_array.length-1]
        $.ajax({
            url: 'api/blog/post/'+post_id,
            datatype: 'json',
            cache: 'false',
            success: function(data){
                this.setState({data: data});
            }.bind(this)
        })
    },
    getInitialState: function(){ return {data: []}; },
    render: function() {
        return (
                <div className="col s12 m10">
                    <div style={{minHeight: 400}} >
                        <span style={{fontSize: 30, fontWeight: 200}}>{this.state.data.title}</span>
                        <p style={{fontSize: 18, fontWeight: 400}}>{this.state.data.subtitle}</p>
                        <br />
                        <p style={{whiteSpace: "pre-wrap"}}>{this.state.data.body}</p>
                        <br />
                    </div>
                </div>
            )
    }
});

module.exports = BlogpostDetail;
