import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state ={
          input: ''
        }
      this.handleAdd = this.handleAdd.bind(this)
      }
    inputHandler(value){
        this.setState({input: value})
    
      }

    handleAdd(){
          this.props.add(this.state.input)
          this.setState({input: ''})
      }

    render() {
        return (
          <div className="App">
            <h1>ToDo List!!!</h1>
            <input placeholder= 'next task'value={this.state.input} onChange={e => this.inputHandler(e.target.value)}></input>
            <button onClick={this.handleAdd}>Add to List</button>
          </div>
        );
      }
}


export default NewTask;