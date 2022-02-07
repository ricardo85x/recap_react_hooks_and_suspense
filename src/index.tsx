import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Counter } from "./components/Counter";
import { TiltBox } from "./components/Tilt";
import { Stopwatch } from "./components/Stopwatch";
import { StopwatchWithReducer } from "./components/StopwatchWithReducer";
import { StopwatchWithReducerV2 } from "./components/StopwatchWithReducerV2";
import { StopwatchHook } from "./components/StopwatchHook";
import { IdleComponent } from "./components/IdleComponent";
import { LeMemo } from "./components/LeMemo";




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/tilt" element={<TiltBox />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/stopwatch2" element={<StopwatchWithReducer />} />
        <Route path="/stopwatch3" element={<StopwatchWithReducerV2 />} />
        <Route path="/stopwatch4" element={<StopwatchHook />} />
        <Route path="/idle" element={<IdleComponent />} />
        <Route path="/memo" element={<LeMemo />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
