var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Sidebar = require('../components/Sidebar');
var About = require('../components/About');
var Blog = require('../components/Blog');
var BlogpostDetail = require('../components/BlogpostDetail');
var Projects = require('../components/Projects');

var Routes = (
        <Router history={browserHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={Blog} />
            <Route path='about' component={About} />
            <Route path='blog' component={Blog} />
            <Route path='blog/:id' component={BlogpostDetail} />
            <Route path='projects' component={Projects} />
          </Route>
        </Router>
);

module.exports = Routes;
