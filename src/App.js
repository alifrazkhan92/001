import "./App.css";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJSX";
import { LearnProps } from "./components/LearnProps";
import { LearnUseState } from "./components/LearnUseState";
import { LearnLiftStateUp } from "./components/LearnLiftStateUp";
import { LearnUseEffect } from "./components/LearnUseEffect";
import { LearnUseMemo } from "./components/LearnUseMemo";

function App() {
  const roll = 23;

  const getmy = (data) => {
    alert(data);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
