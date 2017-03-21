import React, { Component } from 'react';
import './App.css';
import './index.css';

class notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          text: "Hello",
          completed: false
        }

      ],
      user: "",
      newText: "",
      completed: false,
      index: 0,
    };

    this.addingNote = this.addingNote.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  addingNote(event) {
    this.setState({ newText: event.target.value});
  }

  addNote() {
    if(this.state.newText) {
      let newText = { text: this.state.newText, completed:false };
      this.setState({
        notes:[...this.state.notes, newText]//
      });
    }
  }

  removeAll(event) {
    this.setState({notes: []});
  }

  onDone(e){
      this.setState({completed: true})
 }
  
  // Fill the definition of the following method to allow completing each item
  // Hint 1: Pay attention to the element's index on the list.
 /* toggleGroceryCompleteness(groceryIndex) {
    // Put your code here
    let groceries = this.state.groceries;
    groceries[groceryIndex].completed = !groceries[groceryIndex].completed;
    this.setState({
      groceries: groceries,
      completedCount: groceries[groceryIndex].completed ? this.state.completedCount + 1 : this.state.completedCount - 1
    })
  }*/


  render() {
    console.log("hello its me");
    let loopNotes = [],
        typeTask,
        newTask,
        clearList;
        console.log(this.state.notes);
    for(var index = 0; index < this.state.notes.length; index++) {
      loopNotes.push(

             <ul key={index}>
                <div className="panel-block">
              <input type='checkbox' onClick={this.onDone}/>
              {this.state.notes[index].text}
                  </div>
              </ul>
      );
    }

    typeTask = <input className="input is-small" type="text" placeholder="Add" onChange={this.addingNote}/>;
    newTask = <button className="button is-primary is-outlined is-fullwidth" onClick={this.addNote}>Add</button>;
    clearList = <button className="button is-primary is-outlined is-fullwidth" onClick={this.removeAll}>Remove all Checked</button>;


    return (
<div>

    <div className="tile is-ancestor">
    <div className="tile is-parent middle-set is-12">
    <div className="tile is-child box is-12">

      <nav className="panel">
          <p className="panel-heading">
          To Do List
          </p>
    <div className="panel-block">
          <p className="control has-icon">
            {typeTask}
            {newTask}
            <span className="icon is-small">
            <i className="fa fa-search"></i>
            </span>
          </p>
    </div>
          <p className="panel-tabs">
            <a>All</a>
          </p>
          <p>
          {loopNotes}
          </p>

          <div className="panel-block">
          {clearList}
        </div>
        </nav>
      </div>
    </div>
  </div>
</div>


    );
  }
}

export default notes;
