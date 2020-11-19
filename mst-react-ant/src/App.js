import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";

var getPathById = function (id, catalog, callback) {
 
  //定义变量保存当前结果路径
  var temppath = "";
  try {
      function getNodePath(node) {
          temppath += (node.name + "\\");

          //找到符合条件的节点，通过throw终止掉递归
          if (node.id == parseInt(cataid)) {
              throw ("GOT IT!");
          }
          if (node.children && node.children.length > 0) {
              for (var i = 0; i < node.children.length; i++) {
                  getNodePath(node.children[i]);
              }

              //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
              temppath = temppath.substring(0, temppath.length - 1);
              temppath = temppath.substring(0, temppath.lastIndexOf("\\")) + "\\";
          }
          else {

              //找到叶子节点时，删除路径当中的该叶子节点
              temppath = temppath.substring(0, temppath.length - 1);
              temppath = temppath.substring(0, temppath.lastIndexOf("\\")) + "\\";
          }
      }
      getNodePath(catalog);
  }
  catch (e) {
      callback(temppath);
  }
};
function App() {
  return (
    <div className="App">
      <Home/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
