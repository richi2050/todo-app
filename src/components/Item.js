import React, { Component } from 'react'

class Item extends Component {
  contructor(props){
    super(props);
    this.state = {
      editMode: false,
      todo: props.children
    }
  }

  onEditMode(){
    if(this.state.editMode){
      const { onUpdateTodo} = this.props
    }
    this.setState({
      editMode : !this.state.editMode
    });
  }

  handleChange(evt){
    this.setState({
      todo: evt.target.value
    })
  }

  dynamicComponents(){
    let input, actionButton;
    const {editMode,todo} = this.state;

    if(editMode){
      input = (<input type="text"
               className="form-control"
               value={todo}
               onChange={(e) => this.handleChange(e)}
             />);
      actionButton= (
        <button type="button"
          className="btn btn-warning text-white"
          onClick={this.onEditMode.bind(this)}>
          Actualizar
        </button>
      );
    }else{
      input = todo;
      actionButton= (
        <button type="button"
          className="btn btn-warning text-white"
          onClick={this.onEditMode.bind(this)}>
          Editar
        </button>
      );
    }
    return {input, actionButton}
  }

  render() {
    const {index, onRemove} = this.props;
    const { dynamicComponents } = this.dynamicComponents;
    return (
      <tr style={{TextAlign: center}}>
        <th scope='col'>#</th>
        <th scope='col'>{index + 1 }</th>
        <th scope='col'>{this.dynamicComponents.input }</th>ç
        <th scope='col'>
          <div className="btn-group">
            {this.dynamicComponents.actionButton}
            <button type="button" className='btn btn-danger' onClick{ onRemove}> Eliminar</button>
          </div>
        </th>
      </tr>
    )
  }
}

export default Item
