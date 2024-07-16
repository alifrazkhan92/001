import "./App.css";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJSX";
import { LearnLiftingStateUp } from "./components/LearnLiftingStateUp";
import { LearnLiftStateUp } from "./components/LearnLiftStateUp";
import LearnProps from "./components/LearnProps";

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
      <LearnLiftingStateUp myClick={getClick} />

      <LearnLiftStateUp myCli={getmy} />
    </div>
  );
}

export default App;
