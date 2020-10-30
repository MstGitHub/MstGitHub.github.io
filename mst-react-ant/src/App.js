import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import { OrigiRoute } from "./pages/origin-route";
import { DemoReactRoute } from "./pages/react-route";
import { TodoList } from "./pages/todo-list";
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <OrigiRoute /> */}
      <DemoReactRoute/>
      <TodoList/>
    </div>
  );
}


export default App;
