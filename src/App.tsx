import React from 'react';
import { Counter } from './components/Counter';
import { Stopwatch } from './components/Stopwatch';
import { StopwatchHook } from './components/StopwatchHook';
import { StopwatchWithReducer } from './components/StopwatchWithReducer';
import { StopwatchWithReducerV2 } from './components/StopwatchWithReducerV2';
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
      <StopwatchWithReducerV2 />
      <StopwatchHook />

    </div>
  );
}

export default App;
