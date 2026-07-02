import React from "react";

function About() {
  return (
    <div
      id="about"
      className="scroll-mt-17 px-11 py-27 text-center bg-background"
    >
      <div className="max-w-3xl my-0 mx-auto">
        <div className="flex justify-center mb-5.5">
          <img src="/logos/Ethos-PurpleDeep-512.png" className="w-16" />
        </div>
        <p className="text-sm tracking-[0.4em] uppercase text-purple-deep font-semibold mb-5">Our Ethos</p>
        <h2 className="font-serif font-medium text-[clamp(32px,4.5vw,52px)] leading-[1.1] mb-6.5 tracking-[0.3px]">A small bakery with a long-standing devotion to craft.</h2>
        <p className="text-[17px] leading-[1.75] text-plum-ink my-0 mx-auto max-w-150">Every morning before the city wakes, we shape by hand and bake in stone. Our loaves are slow-fermented over three days; our pastries laminated with cultured butter; our coffee sourced from growers we know by name. No shortcuts — just the patient pursuit of something worth waking up for.</p>
      </div>
    </div>
  );
}

export default About;
