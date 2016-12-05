var React = require('react');
var ReactDOM = require('react-dom');
var Projectpost = require('./Projectpost.js');

var Projects = React.createClass({
    componentDidMount: function(){
        $.ajax({
            url: 'http://localhost:8000/api/projects/list/',
            datatype: 'json',
            cache: 'false',
            success: function(data){
                this.setState({data:data});
            }.bind(this)
        })
    },
    getInitialState: function() { return {data: []}; },
    render: function() {
        return (
            <div>
                {this.state.data.map(function(project){
                    return <Projectpost 
                            key={project['id']}
                            title={project['title']}
                            body={project['body']}
                            link_url={project['link_url']}
                            img_url={project['img_url']}
                            /> ;
                })}
            </div>
            )
    }
});

module.exports = Projects;
