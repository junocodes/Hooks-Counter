import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <AppWrapper>
      <AppContent>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </AppContent>
    </AppWrapper>
  );
};

export default App;

// Styled Components

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const AppContent = styled.div`
  h1 {
    font-size: 100px;
    text-align: center;
    margin: 0 0 25px 0;
  }
  button {
    border: none;
    border-radius: 5px;
    background: black;
    color: white;
    font-size: 1em;
    font-weight: bold;
    padding: 25px;
    margin: 5px;
  }
`;
