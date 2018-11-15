import React, { Component } from 'react'
import Item from './Item'
import Form from './Form'

class List extends Component {
  constructor(){
    super();
    this.state ={
      todos : ['Todos']
    }
  }

  onUpdateTodo(todo, index){

  }

  removeTodo(index){

  }

  addTodo(todo){

  }

  render() {
    const {todos} = this.state;
    if(! todos.length ){
      return (
        <div>
          <Form addTodo={(todo) => this.addTodo(todo)}/>
          <hr/>
          <div className="alert alert-danger"> No hay nada </div>
        </div>
      );
    }

    return (
      <div className="col-md-12">
        <Form addTodo={(todo) => this.addTodo(todo)}/>
        <hr/>
        <table className="table">
          <thead>
            <tr>
              <td scope='col'>#</td>
              <td scope='col'>indice</td>
              <td scope='col'>texto</td>
              <td scope='col'>Acciones</td>

            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo, index) => {
                return (
                <Item onUpdateTodo={(todoUpdated) => this.updateTodo(todoUpdated, index)} onRemove={() => this.removeTodo(index)} index={index} key={index}>
                    {todo}
                </Item>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );

  }
}
export default List
