import ChristmasCard from "./components/ChristmasCard";
import Snow from "./components/Snow";
import mainImage from "./assets/mainbg.jpeg";
import "./index.css";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="select-none" id="App">
      <div>
        <img
          src={mainImage}
          className="absolute inset-0 object-cover w-full h-full "
          draggable="false" // Hindrer dra og slipp
        />
      </div>
      <Snow />
      <ChristmasCard />
    </div>
  );
};

export default App;
