import React, { Component } from 'react';
import './index.css';
import login from './login.js';
import RegisterApi from '../api/RegisterApi';
import notesApi from '../api/notesApi';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      name: "",
      username: "",
      newname: "",
      error: "",
      title: ""
    }

    this.onAdd = this.onAdd.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }



onAdd(e){
  e.preventDefault();
    var task={
      name: this.refs.name.value,
      user: this.state.user
    }
    console.log(this.state.user);
   notesApi.onAdd(task).then((res)=>{
           console.log(this.state.user); //access data here //check the console
           if(res.data.success){
            console.log('successss');       
              this.setState({  
                name: res.data.response.name,
              });
              console.log(res.data);
              return;
            }else{
              this.setState({
                error: res.data.response.message,
                title: res.data.title,
              });
              console.log(task);
              console.log("Register Failed!");
            } 
        }).catch((err)=>{
          console.log(err);
        }); 
  }

   componentDidMount(){
        let lastUserState = this.state.user;
        let lastItemState = this.state.items;
        if(lastUserState!==''){
            return; 
        }else{
            RegisterApi.onGetUser().then((res)=>{
                if(res.data.response){
                    this.setState({
                        user: res.data.response._id,
                        email: res.data.response.email,
                        username: res.data.response.username,
                    });

                    
                }else{
                    this.context.router.push('/login');
                
                }
            });
        }       
    }
    onLogout(e){
        e.preventDefault();
        RegisterApi.onLogout().then((res)=>{
            console.log(res);
            console.log("Logout Success!")
            this.context.router.push('/login');  
            // window.location = '/';
        }).catch((err)=>{
          console.log(err);
        });  
    }

  render() {
    

    return (
  <nav className="panel">
      <p className="panel-heading">
        To Do List
      </p>
      <form onSubmit={this.onAdd}>
    <div className="panel-block">
      <p className="control has-icon"> 
        <input className="input" type="text" placeholder="" ref="name" onChange={this.addNote} />
          <span className="icon is-small">
            <i className="fa fa-search"></i>
          </span>
      </p>
    </div>
      <p className="panel-tabs">
        <a className="is-active">All</a>
      </p>
          <label className="panel-block">
          <input type="checkbox" />
            Remember me
          </label>
          <br/>
    <div className="panel-block">
        <button className="button is-primary is-outlined is-fullwidth" type="submit">Add Note</button>
    </div>
    </form>
    <button onClick={this.onLogout}>Log-out</button>
  </nav>
      
        
    )
  }
}

List.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default List;