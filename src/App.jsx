import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Header from "./Header";
import { useState } from "react";
function App() {
  let [filter, setFilter] = useState("all");

  return (
    <>
      <div className="container-app">
        <Navbar />
        <Header filter={filter} setFilter={setFilter} />
        <Card filter={filter} setFilter={setFilter} />
      </div>
    </>
  );
}

export default App;
