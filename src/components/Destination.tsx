import { useState } from "react";
import {
  Destinations,
  destinations,
  DestinationsInfo,
  SpaceDestinations,
} from "../utils/planets";
import cx from "classnames";

export default function Destination() {
  const [planetSrc, setPlanetSrc] = useState(Destinations.MOON);
  const [selectedDestination, setSelectedDestination] = useState(
    SpaceDestinations.MOON
  );
  const [destinationInfo, setDestinationInfo] = useState(
    DestinationsInfo[Destinations.MOON]
  );

  return (
    <section className="text-center grid place-items-center md:mt-10 w-full">
      <div className="w-full flex justify-center md:justify-start">
        <h4 className="text-white md:text-2xl uppercase flex md:ml-10">
          <span className="opacity-25 mr-[18px]">01</span> Pick your destination
        </h4>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:place-items-center flex flex-col">
        <div className="mt-8 md:mt-[60px] grid place-items-center lg:block">
          <img
            src={planetSrc}
            alt="planet"
            className="w-[170px] h-[170px] md:w-[300px] md:h-[300px]  lg:w-[445px] lg:h-[445px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="mt-6 md:mt-[53px] flex space-x-6 w-full mx-auto justify-center lg:justify-start">
            {destinations.map((d) => (
              <span
                key={d}
                className={cx(
                  "pb-2 text-neutral uppercase text-[15px] md:text-base tracking-wide md:tracking-wider",
                  {
                    "border-b-[3px]": selectedDestination === d.toLowerCase(),
                  }
                )}
                onClick={() => {
                  setSelectedDestination(d.toLowerCase());
                  setPlanetSrc(Destinations[d.toUpperCase()]);
                  setDestinationInfo(
                    DestinationsInfo[Destinations[d.toUpperCase()]]
                  );
                }}
              >
                {d}
              </span>
            ))}
          </div>
          {!!destinationInfo ? (
            <div className="mt-5 md:mt-8 px-6 md:px-[97px] lg:px-0 lg:pr-[97px] lg:text-left">
              <h2 className="text-white font-serif text-6xl md:text-[80px] md:leading-[92px] md:mb-2 uppercase">
                {destinationInfo.name}
              </h2>
              <p className="text-neutral text-center lg:text-left text-[15px] md:text-base md:leading-7 mb-8 md:mb-12">
                {destinationInfo.desc}
              </p>
              <div className="border-b border-neutral w-full h-[1px] mb-8 md:mb-12" />
              <div className="flex flex-col md:flex-row md:justify-evenly lg:justify-start lg:gap-16">
                <div className="mt-4 md:mt-0">
                  <h3 className="text-neutral text-sh2 tracking-wide uppercase mb-4 ">
                    Avg. Distance
                  </h3>
                  <p className="text-white text-4xl">
                    {destinationInfo.aveDistance}
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <h3 className="text-neutral text-sh2 uppercase tracking-wide mb-4">
                    Est. Travel Time
                  </h3>
                  <p className="text-white text-4xl">
                    {destinationInfo.estTravelTime}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
