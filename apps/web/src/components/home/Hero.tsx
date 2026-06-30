import React from "react";

function Hero() {
  return (
    <div
      id="#hero"
      className="scroll-mt-17 relative min-h-[84vh] flex items-center justify-center overflow-hidden"
    >
      <div>
        <img
          src="/hero.png"
          alt="hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 [background:linear-gradient(160deg,var(--purple-d),var(--purple)_60%,var(--blue))]"></div>
      </div>
    </div>
  );
}

export default Hero;
