export const LearnLiftingStateUp = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    let dt = "I am a CHILD.";
    props.myClick(dt);
  };
  return (
    <>
      <h1>Learn Lifting State Up</h1>
      <button onClick={handleClick}>Lifting State Up</button>
    </>
  );
};
