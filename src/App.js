import "./App.css";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJSX";
import { LearnProps } from "./components/LearnProps";
import { LearnUseState } from "./components/LearnUseState";
import { LearnLiftStateUp } from "./components/LearnLiftStateUp";
import { LearnUseEffect } from "./components/LearnUseEffect";
import { LearnUseMemo } from "./components/LearnUseMemo";
import { LearnCustomHook } from "./components/LearnCustomHook";
import { LearnConditionalRendering } from "./components/LearnConditionalRendering";
import { LearnMapMethod } from "./components/LearnMapMethod";
import CreateTodo from "./components/CreateTodo";

function App() {
  const roll = 23;

  const getmy = (data) => {
    alert(data);
  };

  return (
    <div className="App">
      <CreateTodo />
      <hr />
      <LearnJSX />
      <hr />
      <LearnProps name="Props is a basic concept." roll={roll} />
      <hr />
      <LearnEvent />
      <hr />
      <LearnLiftStateUp myCli={getmy} />
      <hr />

      <LearnUseState />
      <hr />
      <LearnUseEffect />
      <hr />
      <LearnUseMemo />
      <hr />
      <LearnCustomHook />
      <hr />
      <LearnConditionalRendering />
      <hr />
      <LearnMapMethod />
    </div>
  );
}

export default App;
