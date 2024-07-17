import "./App.css";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJSX";
import { LearnLiftingStateUp } from "./components/LearnLiftingStateUp";
<<<<<<< HEAD
import LearnProps from "./components/LearnProps";
import { LearnUseState } from "./components/LearnUseState";
=======
import { LearnLiftStateUp } from "./components/LearnLiftStateUp";
import LearnProps from "./components/LearnProps";
>>>>>>> 03cbbd4da72764e963cd45d44fae312d42e105a4

function App() {
  const roll = 23;
  const getClick = (data) => {
    alert(data);
  };

<<<<<<< HEAD
=======
  const getmy = (data) => {
    alert(data);
  };
>>>>>>> 03cbbd4da72764e963cd45d44fae312d42e105a4
  return (
    <div className="App">
      <LearnJSX />
      <LearnProps name="Props is a basic concept." roll={roll} />
      <LearnEvent />
      <LearnLiftingStateUp myClick={getClick} />
<<<<<<< HEAD
      <LearnUseState />
=======

      <LearnLiftStateUp myCli={getmy} />
>>>>>>> 03cbbd4da72764e963cd45d44fae312d42e105a4
    </div>
  );
}

export default App;
