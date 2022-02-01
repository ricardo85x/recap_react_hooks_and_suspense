import React from 'react';
import { Counter } from './components/Counter';
import { Stopwatch } from './components/Stopwatch';
import { StopwatchWithReducer } from './components/StopwatchWithReducer';
import { TiltBox } from "./components/Tilt"


function App() {
  return (
    <div className="App" 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column'
      }}
    >
      <h2>Hello world</h2>
      <Counter />
      <TiltBox />
      <Stopwatch />
      <StopwatchWithReducer />

    </div>
  );
}

export default App;
