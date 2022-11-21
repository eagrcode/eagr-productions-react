import React from "react";

function Cta({ text }) {
  return (
    <>
      <a href="#portfolio">
        <button id="cta">{text}</button>
      </a>
    </>
  );
}

export default Cta;
