import React from 'react';
import Counter from './Components/Counter';
import './styles.css';

class App extends React.Component {
  state = {
    number: 0,
  };
  handleClick() {
    this.setState((state) => ({ number: state.number + 1 }));
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>Increment</button>
        <Counter number={this.state.number} />
      </>
    );
  }
}
export default App;
