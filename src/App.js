import React from "react";
import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import ModalLocation from "./components/ModalLocation/ModalLocation";

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
      <ModalLocation />
    </div>
  );
}

export default App;
