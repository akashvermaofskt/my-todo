import React, { Component } from 'react';

class TodoInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    handleTitleChange(event){
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.title !== ''){
            this.props.addTodo(this.state.title)
            //reset input box
            this.setState({
                title: ''
            })
        }
    }

    render(){
        return (
            <div className="todo_input">
                <div>
                    <input
                        type="text"
                        placeholder="title.."
                        required={true}
                        value = {this.state.title}
                        onChange={this.handleTitleChange.bind(this)}
                    />
                </div>
                <div className="submitButton">
                    <button onClick = { this.handleSubmit.bind(this) }>Add</button>
                </div>
            </div>
        )
    }

}

export default TodoInput