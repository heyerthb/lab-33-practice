import React from 'react';

export const CounterContext = React.createContext();

class CounterProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }

  increment = () => {
    const count = this.state.count;
    this.setState({count: count + 1});
  }

  decrement = () => {
    const count = this.state.count;
    this.setState({count: count - 1});
  }

  render(){
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

export default CounterProvider;