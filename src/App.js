import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'
import './App.css'

class App extends Component{
    
    render(){
        return (
            <div className="App">
              <h1 className="header">Todos</h1>
              <TodoInput addTodo={this.props.actions.addTodo}/>
              <TodoList actions={this.props.actions} todos= {this.props.todos}/>
            </div>
          )
    }
}




function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)