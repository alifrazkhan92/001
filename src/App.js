import "./App.css";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJSX";
import { LearnLiftingStateUp } from "./components/LearnLiftingStateUp";
import LearnProps from "./components/LearnProps";
import { LearnUseState } from "./components/LearnUseState";

function App() {
  const roll = 23;
  const getClick = (data) => {
    alert(data);
  };

  return (
    <div className="App">
      <LearnJSX />
      <LearnProps name="Props is a basic concept." roll={roll} />
      <LearnEvent />
      <LearnLiftingStateUp myClick={getClick} />
      <LearnUseState />
    </div>
  );
}

export default App;
