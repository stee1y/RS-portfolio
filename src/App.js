import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

import bg from "./bg.jpg";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20  w-full xl:pb-32">
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
        </Switch>
      </div>

      <div className="fixed w-full h-full inset-y-0 right-0">
        <img className="object-cover h-full w-full" src={bg} alt="bg" />
      </div>
    </BrowserRouter>
  );
}

export default App;
