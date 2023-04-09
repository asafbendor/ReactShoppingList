import React, { Component } from 'react';
import TobuyList from './TobuyList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TobuyList 
      color={`red`}
      title={`vegetables`}
      initialData={[`tomatoes`, `cucumbers`, `potatoes`]}
      />
        <TobuyList 
      color={`blue`}
      title={`fruits`}
      initialData={[`apple`, `banana`, `orange`]}
      />
        <TobuyList 
      color={`green`}
      title={`meat`}
      initialData={[`kabab`, `chicken`, `beef`]}
      />
      </div>
    );
  }
}

export default App;