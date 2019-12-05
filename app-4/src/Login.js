import React, {Component}from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.login = this.login.bind(this);
    }
    usernameChange(typedUsername){
        this.setState({username: typedUsername})
    }
    passwordChange(typedPassword){
        this.setState({password: typedPassword})
    }
    login(){
        alert(this.state.username + ' ' + this.state.password)
    }
    render(){
        return(
            <div>
                <input placeholder="Username" onChange={e => this.usernameChange(e.target.value)} type='text'></input>
                <input placeholder="Password" onChange={e => this.passwordChange(e.target.value)} type='text'></input>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;