import React, { Component } from 'react'
import TodoItem from './TodoItem'
import "./comp.css"

class TodoList extends Component{
    
    render(){
        return (
            <div> 
                <div>List of todos:</div>
                <ul className="todo_list">
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} actions= {this.props.actions}/>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default TodoList