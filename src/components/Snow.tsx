import React from "react";

const Snow: React.FC = () => {
  const generateSnowflakes = () => {
    return Array.from({ length: 80 }, (_, i) => (
      <div
        key={i} // Unik nøkkel for hvert snøflak basert på indeks
        className="snowflake text-xs md:text-base"
        style={{
          left: `${Math.random() * 120}vw`, // Tilfeldig horisontal plassering over skjermen
          animationDelay: `${Math.random() * 10}s`, // Tilfeldig forsinkelse for å spre snøflakene over tid
          animationDuration: `${5 + Math.random() * 20}s`, // Varierende fallhastighet
          color: "white",
        }}
      >
        ❄
      </div>
    ));
  };

  return (
    // Wrapper-div for snøflakene som fyller hele skjermen
    <div className="absolute inset-0 overflow-hidden">
      {generateSnowflakes()} {/* Kaller funksjonen som returnerer snøflakene */}
    </div>
  );
};

export default Snow;
