import React, { Component } from 'react';

export const FSAContext = React.createContext();
  //exporting context object
class FamilySocialAppProvider extends Component {

state = { 
  currentUser: {}
}

render() {
  return (
    <FSAContext.Provider value= {{ state: this.state, setUser: (value) => this.setState({ currentUser: value })}}>
     { this.props.children } 
    </FSAContext.Provider>
    )
  }
}

export default FamilySocialAppProvider;
