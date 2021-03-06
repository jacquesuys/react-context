import React, { Component } from 'react';

const Context = React.createContext();
class Parent extends Component {
  state = { x: 1 };
  handleContextChange = x => this.setState({ x });

  render() {
    const contextValue = {
      data: this.state,
      handleChange: this.handleContextChange
    };

    return (
      <Context.Provider value={contextValue}>
        <Child />
      </Context.Provider>
    );
  }
}

const Child = props => (
  <div>
    <GrandChild />
  </div>
);

const GrandChild = props => (
  <Context.Consumer>
    {({ handleChange, data }) => (
      <div>
        <button onClick={() => handleChange(data.x + 1)}>Change</button>
        <Child2 text={data.x} />
      </div>
    )}
  </Context.Consumer>
);

const Child2 = props => <p>{props.text}</p>;

export default Parent;
