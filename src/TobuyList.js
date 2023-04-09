import React, { Component } from 'react';

class TobuyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          newItemToAdd: '',
          isOpen: true,
          items: this.props.initialData
        }
      }

    toggleList = () => {
        this.setState({isOpen: !this.state.isOpen});
        }

    updateNewItemToAdd = (newVal) => {
        this.setState({ newItemToAdd: newVal })
        }

    addItem = () => {
        let clonedState= this.state.items.slice();
        clonedState.push(this.state.newItemToAdd);
        this.setState({items: clonedState});
        }


  render() {
    return (
      <div style={{backgroundColor: this.props.color}} className="TobuyList">
        <input placeholder={"add " + this.props.title} onChange={e => this.updateNewItemToAdd(e.target.value)}/>   
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.toggleList}>{this.state.isOpen ? `hide` : `show`}</button>
        {this.state.isOpen && <ul>}
         {this.state.items.map((item, index) => <li key={index}>{item}</li>)}   
        </ul>}
      </div>
    );
  }}

export default TobuyList;