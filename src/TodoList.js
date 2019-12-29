import React from 'react';
import './TodoList.scss';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_input: '',
      items: ['item1', 'item2']
    };
  };
  render() {
    return (
      <div className="GrandParent">
        <span className="Todo">Todo</span>
        <button classNmae = "button">+</button>
        <ul className=" listParent">
          {
            this.state.items.map((item, i) =>
              <li className="listItems" key={'item' + i}> {item}  </li>
            )
          }
        </ul>
        <input type="text"
        value={this.state.item_value}
        onChange={this.update}>
        </input>
      </div>
    )
  }
}
export default TodoList;