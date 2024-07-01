import React from "react";
import { Button } from "./components/Button";
import { Keys } from "./components/Keys";
import { Post } from "./components/Post";
import { MyComponent } from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent counter={7} />
    </div>
  );
}

export default App;
