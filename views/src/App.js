import React from "react";
import { Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Loadable from "react-loadable";
import Loading from "./components/atoms/Loading";

import Nav from "./components/organisms/Nav";
import ErrorBoundary from "./components/pages/ErrorBoundary";

import "./App.scss";

export default () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Nav/>
        <Switch>
          <Route path="/music" component={Player}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/blog/:_id" component={Post}/>
          <Route path="/frequently-asked-questions" component={Faq}/>
          <Route exact path="/" component={Home}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </ErrorBoundary>
    </Provider>
  );
};  

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ "./components/pages/Home"),
  loading: Loading,
  delay: 500
});

const Player = Loadable({
  loader: () => import(/* webpackChunkName: "Player" */ "./components/pages/Player"),
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

const Faq = Loadable({
  loader: () => import(/* webpackChunkName: "Faq" */ "./components/pages/Faq"),
  loading: Loading,
  delay: 500
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ "./components/pages/NotFound"),
  loading: Loading,
  delay: 500
});