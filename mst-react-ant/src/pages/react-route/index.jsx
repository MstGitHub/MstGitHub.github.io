import React from 'react'
import { render } from 'react-dom'
import { ReactRouteApp } from "./app";
// 首先我们需要导入一些组件...
import { BrowserRouter as Router, Route } from 'react-router-dom'

const About = () => {
  return (<div>About待开发...</div>);
};
const Inbox  = () => {
  return (<div>Inbox待开发...</div>);
};
const Home  = () => {
  return (<div>Home待开发...</div>);
};


// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
export function DemoReactRoute () {
    return (
      <Router>
        <Route exact path="/" component={ReactRouteApp}/>
        <Route path="/about" >
          <About/>
        </Route>
        <Route path="/inbox">
        <Inbox/>
        </Route>
      </Router>
    )
}