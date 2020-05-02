import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withCookies } from "react-cookie";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Loadable from "react-loadable";
import Loading from "./components/atoms/Loading";

import Nav from "./components/organisms/Nav";

import "./App.scss";

class App extends Component {
  static propTypes = {
    // isAuthenticated: PropTypes.bool
  };

  render() {
    // const { isAuthenticated } = this.props;
    const { cookies } = this.props;
    const isAuthenticated = false;

    return (
      <ErrorBoundary>
        <Nav isAuthenticated={isAuthenticated} />
        <Switch>
          {/* { isAuthenticated ?
            <Route path="/music" component={Music}/>
          :
            <Redirect to="/pricing">
              <Route path="/music" component={Music}/>
            </Redirect>
          }   */}
          <Route path="/music" render={() => (<Music cookies={cookies}/>)}/>
          <Route path="/signin" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/blog/:_id" component={Post}/>
          <Route path="/pricing" component={Pricing}/>
          <Route exact path="/" component={Home}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </ErrorBoundary>
    );
  };
};

const ErrorBoundary = Loadable({
  loader: () => import(/* webpackChunkName: "ErrorBoundary" */ "./components/pages/ErrorBoundary"),
  loading: Loading,
  delay: 500
});

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ "./components/pages/Home"),
  loading: Loading,
  delay: 500
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ "./components/pages/Login"),
  loading: Loading,
  delay: 500
});

const ForgotPassword = Loadable({
  loader: () => import(/* webpackChunkName: "ForgotPassword" */ "./components/pages/ForgotPassword"),
  loading: Loading,
  delay: 500
});

const Pricing = Loadable({
  loader: () => import(/* webpackChunkName: "Pricing" */ "./components/pages/Pricing"),
  loading: Loading,
  delay: 500
});

const Music = Loadable({
  loader: () => import(/* webpackChunkName: "Music" */ "./components/pages/Music"),
  loading: Loading,
  delay: 500
});

const Blog = Loadable({
  loader: () => import(/* webpackChunkName: "Blog" */ "./components/pages/Blog"),
  loading: Loading,
  delay: 500
});

const Post = Loadable({
  loader: () => import(/* webpackChunkName: "Post" */ "./components/pages/Post"),
  loading: Loading,
  delay: 500
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ "./components/pages/NotFound"),
  loading: Loading,
  delay: 500
});

const mapStateToProps = state => ({
  // isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

const mapDispatchToProps = { };

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(App));