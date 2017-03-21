import React, { Component } from 'react';
import './index.css';
import RegisterApi from '../api/RegisterApi';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: "",
      error: "",
      title: "",
      isLoading: false
    }
    this.onRegister = this.onRegister.bind(this);
  }

 onRegister(){
    var data={
      username: this.refs.username.value,
      password: this.refs.password.value,
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      email: this.refs.email.value
    }
    RegisterApi.onRegister(data).then((res)=>{
            console.log(res.data); //access data here //check the console
            const data = res.data;
            if(data.success){
              this.setState({  
                user: data.response._id,
                username: data.response.username,
              });
              this.context.router.push('/notes');
              console.log(data);
              return;
            }else{
              this.setState({
                error: data.response.message,
                title: data.title,
              });
              console.log(data);
              console.log("Register Failed!");
            }
        }).catch((err)=>{
          console.log(err);
        });
  }

  render() {


    return (
    <div className="tile is-parent is-12">
    <div className="tile is-child box">
      <p className="title">Registration Form</p>
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
        <span className="title is-2"></span>
        <label className="title is-5">Email:
        <p className="control">
        <input className="input" type="text" placeholder="" ref="email"/>
        </p>
        </label>
        <span className="title is-2"></span>
        <label className="title is-5">First Name:
        <p className="control">
        <input className="input" type="text" placeholder="" ref="firstname"/>
        </p>
        </label>
        <span className="title is-2"></span>
        <label className="title is-5">Last Name:
        <p className="control">
        <input className="input" type="text" placeholder="" ref="lastname"/>
        </p>
        </label>
          <div>
          <br/>
          <button onClick={this.onRegister}>Submit</button>
        </div>
        <br/>
       <Link to='login'>
        <button>Log-in</button>
        </Link>
    </div>
    </div>        
        
    )
  }
}

Register.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Register;