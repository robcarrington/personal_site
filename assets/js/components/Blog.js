var React = require('react');
var ReactDOM = require('react-dom');
var Blogpost = require('./Blogpost.js');

var Blog = React.createClass({
    componentDidMount: function(){
        $.ajax({
            url: 'api/blog/list/',
            datatype: 'json',
            cache: 'false',
            success: function(data){
                this.setState({data: data});
            }.bind(this)
        })
    },
    getInitialState: function() { return {data: []}; },
    render: function() {
        return (
            <div className="row" style={{maxWidth: 900}} >
                {this.state.data.map(function(blogpost){
                    return <Blogpost 
                    key={blogpost['id']} 
                    id={blogpost['id']}
                    title={blogpost['title']}
                    subtitle={blogpost['subtitle']} 
                    color={blogpost['color']}/>;
                })}
            </div>
            )
    }
});

module.exports = Blog;
