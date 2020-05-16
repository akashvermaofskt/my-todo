import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.todo.title,
            completed: false,
        }
    }

    handleComplete(){
        this.props.actions.completeTodo(this.props.todo.id)
        this.setState({
            completed: !this.state.completed
        })
    }

    handleDelete(){
        this.props.actions.deleteTodo(this.props.todo.id)
    }
    


    render(){
        return (
            <li className="todo_item">
                <input type="checkbox"
                    defaultChecked={this.state.completed}
                    required={true}
                    onClick={this.handleComplete.bind(this)}/>
                <span className="title">{this.state.title}</span>
                <button onClick=
                    {this.handleDelete.bind(this)}>Delete</button>
            </li>
        )
    }
}


export default TodoItem