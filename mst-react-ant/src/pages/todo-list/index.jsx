import React from "react";
import styles from "./style.scss";
import classnames from "classnames";
const cx = classnames.bind(styles);

/**
 * 1.可以新增一个todo
 * 2.可以更改一个todo
 * 3.可以删除一个todo
 * ....
 * 4.可以快速查找
 * 
 */

const TodoItem = () => {

}

export class TodoList extends React.Component{
 render() {
   return (
     <div className={cx("todo-list")}>
       <h3>自定义todo</h3>
       <div>
         <input type="text" placeholder="新增一个todo" />
         <button>新增</button>
       </div>
     </div>
   );
 }
}