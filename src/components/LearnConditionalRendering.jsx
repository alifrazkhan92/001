import React, { useState } from "react";

//There are two following ways for conditional rendering

export const LearnConditionalRendering = () => {
  const status = true;
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h1>Learn Conditional Rendering</h1>
      {status && <h3>You are Pass.</h3>}
      {isLogin ? (
        <>
          <h2>Login</h2>
          <button onClick={() => setIsLogin(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Log Out</h2>
          <button onClick={() => setIsLogin(true)}>Login</button>
        </>
      )}
    </>
  );
};
