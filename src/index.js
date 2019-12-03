import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './components/editor/counter-context.js';
import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <CounterContext>
        <App />
      </CounterContext>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
