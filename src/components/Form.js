import React, { Component } from 'react'

export class Form extends Component {
  constructor(){
    super();
      this.state = {
        todo:''
      };
    }

    updateTodo(evt){
      this.setState ({
        todo: evt.target.value
      });
    }
    addTodo(evt){
      evt.preventDefault();
      this.props.addTodo(this.state.todo);

    }

  render() {
    const {todo} = this.state;
    return (
      <div className="container m-5">
        <form onSubmit={ e => this.addTodo(e)}>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control"
                  placeholder="Todo" id='todo'
                  value={todo} onChange={ this.updateTodo.bind(this)}/>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
