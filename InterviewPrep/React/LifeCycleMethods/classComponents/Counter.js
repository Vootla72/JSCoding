import React from 'react';

class Counter extends React.Component {
  componentDidMount() {
    console.log('component Did Mount runs');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      console.log('component Did Update Runs');
    }
  }
  componentWillUnmount() {
    console.log('component will unmount runs');
  }
  render() {
    return <h1>{this.props.number}times</h1>;
  }
}
export default Counter;
