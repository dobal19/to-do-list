import React from 'react';
import './TodoList.scss';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_input: '',
      items: []
    };
    this.update = this.update.bind(this);
    this.addItem = this.addItem.bind(this);
  };
  update(event) {
    this.setState({
      item_input: event.target.value
    });
    console.log('event', event.target.value)
  }

  addItem(){
    this.setState(prev => {
      return {
        item_input: '',
        items: prev.items.concat(prev.item_input)
      };
    });
    
  }
  render() {
    return (
      <div className="GrandParent">
        <span className="Todo">Todo</span>
          <button className="button" onClick={this.addItem}>+</button>
        <ul className=" listParent">
          {
            this.state.items.map((item, i) =>
              <li className="listItems" key={'item' + i}> 
                 {item} 
               </li>
            )
          }
        </ul>
        <input className="inputBox" type="text"
          value={this.state.item_input}
          onChange={this.update}></input>

      </div>
    )
  }
}
export default TodoList;