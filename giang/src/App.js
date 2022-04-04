import './css/Style.css';
import React, {PureComponent} from 'react';

import Header from './compoment/Header';
import TodoList from './compoment/Todolist';
import Footer from './compoment/Footer';



class App extends PureComponent {
  state = {
    todoList:[{
      id: 1,
      text: 'sad',
      // checked: true
    }, {
      id:2,
      text: 'adsfa',
      // checked: false
    }],
    todoEditId:''
  }

  addTodo = (todo = {}) =>{
    this.setState(preState =>({
      todoList: [...preState.todoList, todo]
    }))
  }

  onEditTodo = (todo = {}, index = -1) =>{
    if(index >= 0){
      const {todoList: list} = this.state
      list.splice(index, 1, todo)
      this.setState({
        todoList: list, 
        todoEditId: ''
      })
    }
  }

  gettodoEditId =(id = '') =>{
    this.setState({todoEditId: id})
  }

  render(){
    const { todoList, todoEditId } = this.state
    return (
      <div className="todoapp">
        
          <Header addTodo={this.addTodo} />
          <TodoList 
            todoList={todoList} 
            gettodoEditId={this.gettodoEditId}
            todoEditId={todoEditId}
            onEditTodo={this.EditTodo}
          />
          <Footer />
      </div>
    );
  }
}

export default App;
