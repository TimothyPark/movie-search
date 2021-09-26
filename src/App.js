import './App.css';
import React from "react"

import SearchMovie from './SearchMovie';

class App extends React.Component {

  render(){
    return (
      <div className="container">
         <h1 className="title">Generic Bullshit</h1>
         <SearchMovie />
      </div>
    );
  }

}

export default App;
