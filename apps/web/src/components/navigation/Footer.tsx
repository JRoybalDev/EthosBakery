import React from "react";

function Footer() {
  return (
    <footer className="bg-plum-ink text-[oklch(0.86_0.01_300)] pt-18 px-11 pb-9">
      <div className="max-w-280 my-0 mx-auto grid grid-cols-[1.6fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.75 mb-4">
            <img src="/logos/Ethos-White-512.png" className="w-18 h-18" />
          </div>
          <p className="text-sm leading-[1.7] text-[oklch(0.72_0.012_300)] max-w-75 m-0">
            Bread, pastry & coffee, made with intention. Baked fresh daily
            across Los Angeles.
          </p>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.2em] uppercase text-[oklch(0.66_0.04_298)] mb-4 font-semibold">
            Visit
          </p>
          <p className="text-sm leading-[1.9] text-[oklch(0.78_0.012_300)] m-0">
            Silver Lake
            <br />
            Venice
            <br />
            Mon-Sun · 7am-6pm
          </p>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.2em] uppercase text-[oklch(0.66_0.04_298)] mb-4 font-semibold">
            Connect
          </p>
          <p className="text-sm leading-[1.9] text-[oklch(0.78_0.012_300)] m-0">
            Instagram
            <br />
            hello@ethosbakery.la
            <br />
            (323) 555-0119
          </p>
        </div>
      </div>
      <div className="max-w-280 mt-12 mx-auto mb-0 pt-6 border-t-[oklch(0.36_0.02_300)] text-[12.5px] text-[oklch(0.62_0.012_300)]">© 2026 Ethos Bakery · Los Angeles, CA</div>
    </footer>
  );
}

export default Footer;
