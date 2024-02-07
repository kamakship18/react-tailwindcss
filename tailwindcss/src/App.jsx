import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Fotter from "./components/Fotter"
import Alert from "./components/Alert"
import Card from "./components/Card"

function App() {
  return (
    <div>
      <Navbar />
      <Alert />
      <Hero />
      <Card />
      <Fotter />
    </div>
  );
}

export default App;