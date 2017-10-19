import React from 'react';
import { render } from 'react-dom';
import Home from './screens/Home';
import Search from './screens/Search';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/search":
      return <Search />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});
