import React from "react";
import MapCard from "../cards/MapCard";
import locations from "@/data/locations.json";

function Locations() {
  
  return (
    <div id="locations" className="scroll-mt-17 px-11 py-24 bg-secondary">
      <div className="max-w-280 my-0 mx-auto">
        <div className="text-center mb-12.5">
          <p className="text-sm tracking-[0.4em] uppercase text-purple-deep font-semibold mb-4">
            Find Us
          </p>
          <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] m-0 tracking-[0.3px]">
            Two doors across Los Angeles
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(2,1fr)] gap-7">
            {locations.map((location, idx) => (
              <MapCard key={idx} location={location} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Locations;
