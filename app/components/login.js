import React, { Component } from 'react';
import './index.css';
import RegisterApi from '../api/RegisterApi';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: "",
      error: "",
      title: "",
      isLoading: false
    }
    this.onLogin = this.onLogin.bind(this);
  }

    onLogin(e){
        e.preventDefault();
        let data = {
            username: this.refs.username.value,
            password: this.refs.password.value,
        }
        RegisterApi.onLogin(data).then((res)=>{
            console.log(res);
            const data = res.data;
            if(data.success){
              this.setState({
                user: res.data.response._id,
                username: data.response.username,
              });
            this.context.router.push('/notes');
              // window.location = '/todo';
              console.log(data);
              return;
            }else{
              this.setState({
                error: data.response,
                title: data.title,
              });
              console.log(data);
              console.log("Login Failed!");}
        }).catch((err)=>{
          console.log(err);
    });
}
  render() {


    return (
    <div className="tile is-parent is-12">
    <div className="tile is-child box">
      <p className="title">Sign-in Form</p>
        <label className="title is-5">Username:
        <p className="control">
        <input className="input" type="text" placeholder="" ref="username"/>
        </p>
        </label>
        <span className="title is-2"></span>
        <label className="title is-5">Password:
        <p className="control">
        <input className="input" type="password" placeholder="" ref="password"/>
        </p>
        </label>
          <div>
          <br/>
          <button onClick={this.onLogin}>Sign-in</button>
        </div>
        <br/>
        <Link to='/'>
        <button>Register</button>
        </Link>
    </div>
    </div>        
        
    )
  }
}

login.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default login;