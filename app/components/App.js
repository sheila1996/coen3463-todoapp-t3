import React from 'react'
import './App.css';
import './index.css';

class App extends React.Component{
	
    render(){
        return(

  <div className="tile is-ancestor is-5">
        {this.props.children}
    </div>

        );
    }
}

export default App;