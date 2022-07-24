import React, { useEffect } from 'react';

function Counter({ number }) {
  useEffect(() => {
    console.log('component will Mount Runs');
  }, []);
  useEffect(() => {
    console.log('component Did Update Runs');
  }, [number]);
  useEffect(() => {
    return () => {
      console.log('component is unmounted');
    };
  }, [number]);
  return <h1>{number}times</h1>;
}

export default Counter;
