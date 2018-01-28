import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './my-component.jsx'

class App extends React.Component{
  render(){
    return (
      <MyComponent />
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('react-app')
);