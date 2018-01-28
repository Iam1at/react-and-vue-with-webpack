import React from 'react';

export default class MyComponent extends React.Component{
  render() {
    const appStyle = {
      color: "blue"
    };
    return (
      <div style={appStyle}>
        Hello React!
      </div>
    )
  }
}