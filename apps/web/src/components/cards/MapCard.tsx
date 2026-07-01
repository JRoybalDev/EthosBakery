import React from "react";

interface MapItem {
  locationName: string;
  businessName: string;
  location: string;
  daysOpen: string;
  hoursOpen: string;
}

interface MapCardProps {
  location: MapItem;
}

function MapCard({ location }: MapCardProps) {
  return (
    <div className="bg-card border-border rounded-2xl overflow-hidden">
      <div className="h-50 border-b-border">
        {/* Replace with map location */}
      </div>
      <div className="px-6.5 py-7">
        <div className="flex items-center gap-2.25 mb-1.75">
          <div className="w-2.25 h-2.25 bg-purple-deep rotate-45"></div>
          <span className="text-sm tracking-[0.16em] uppercase text-purple-deep font-semibold">
            {location.locationName}
          </span>
        </div>
        <h3 className="font-serif font-semibold text-[27px] mb-3">
          {location.businessName}
        </h3>
        <p className="text-[14.5px] leading-[1.6] text-plum-ink m-0">
          {location.location}
        </p>
        <p className="text-[13.5px] leading-[1.6] text-subtle-ink mt-2.5">
          {location.daysOpen} · {location.hoursOpen}
        </p>
      </div>
    </div>
  );
}

export default MapCard;
