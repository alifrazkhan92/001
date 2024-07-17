import "./App.css";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJSX";
import { LearnProps } from "./components/LearnProps";
import { LearnUseState } from "./components/LearnUseState";
import { LearnLiftStateUp } from "./components/LearnLiftStateUp";
import { LearnUseEffect } from "./components/LearnUseEffect";

function App() {
  const roll = 23;
  const getClick = (data) => {
    alert(data);
  };
  const getmy = (data) => {
    alert(data);
  };

  return (
    <div className="App">
      <LearnJSX />
      <LearnProps name="Props is a basic concept." roll={roll} />
      <LearnEvent />
      <LearnLiftStateUp myCli={getmy} />
      <LearnUseState />
      <LearnUseEffect />
    </div>
  );
}

export default App;
