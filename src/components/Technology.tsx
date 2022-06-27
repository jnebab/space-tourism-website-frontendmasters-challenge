import { useState } from "react";
import {
  technologies,
  TechnologyImages,
  TechnologyInfo,
  TechnologyNames,
} from "../utils/technology";
import cx from "classnames";

export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(
    TechnologyNames.LAUNCHVEHICLE
  );
  const [techInfo, setTechInfo] = useState(
    TechnologyInfo[TechnologyImages.LAUNCHVEHICLE_PORTRAIT]
  );

  return (
    <section className="text-center grid place-items-center pb-6 md:mt-10">
      <div className="w-full flex justify-center md:justify-start">
        <h4 className="text-white uppercase flex md:text-2xl md:ml-10 lg:ml-[166px]">
          <span className="opacity-25 mr-[18px]">03</span> Space Launch 101
        </h4>
      </div>

      <div className="mt-8 md:mt-[60px] lg:grid lg:grid-cols-12">
        <div
          className={cx(
            "w-screen lg:w-full h-[170px] md:h-[310px] bg-cover lg:bg-contain lg:bg-no-repeat lg:h-[515px] lg:col-start-9 lg:col-end-13",
            {
              "lg:bg-launch-vehicle-portrait bg-launch-vehicle-landscape":
                selectedTechnology === TechnologyNames.LAUNCHVEHICLE,
              "lg:bg-space-port-portrait bg-space-port-landscape":
                selectedTechnology === TechnologyNames.SPACEPORT,
              "lg:bg-space-capsule-portrait bg-space-capsule-landscape":
                selectedTechnology === TechnologyNames.SPACECAPSULE,
            }
          )}
        />
        {!!techInfo ? (
          <div className="hidden text-neutral text-left max-w-[55ch]">
            <h4 className="font-sans-condensed text-base tracking-wider uppercase">
              The Terminology...
            </h4>
            <h2 className="text-6xl uppercase font-serif font-normal">
              {techInfo.name}
            </h2>
            <p className="font-norma font-[18px] leading-8">{techInfo.desc}</p>
          </div>
        ) : null}
        <div className="mt-6 mx-auto md:mt-14 lg:mt-[27px] lg:ml-[165px] space-x-6 lg:space-x-0 lg:space-y-8 w-full flex justify-center lg:justify-start lg:flex-col  lg:col-start-1 lg:col-end-3 lg:row-start-1">
          {technologies.map((t, i) => (
            <div
              key={t}
              className={cx(
                "border border-neutral text-white w-10 h-10 lg:w-[80px] lg:h-[80px] lg:text-[32px] lg:font-serif rounded-full grid place-items-center",
                {
                  "bg-white text-dark": t === selectedTechnology,
                }
              )}
              onClick={() => {
                const portraitName = `${t}_PORTRAIT`;
                const landscapeName = `${t}_LANDSCAPE`;
                const portrait = TechnologyImages[portraitName];
                const landscape = TechnologyImages[landscapeName];
                setSelectedTechnology(t);
                setTechInfo(
                  TechnologyInfo[landscape] || TechnologyInfo[portrait]
                );
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
        {!!techInfo ? (
          <div className="flex flex-col text-white text-center mt-8 px-6 pb-6 md:mb-11 md:mx-[155px] lg:mx-0 lg:ml-[80px] lg:text-left lg:w-[55ch] lg:col-end-3 lg:col-start-9 lg:row-start-1">
            <h4 className="font-sans-condensed text-sm md:text-base md:mb-4 text-neutral tracking-wide uppercase mb-1">
              The Terminology...
            </h4>
            <h2 className="text-2xl uppercase font-serif font-normal mb-4 md:text-5xl">
              {techInfo.name}
            </h2>
            <p className="font-norma text-[15px] lg:text-lg lg:leading-8 leading-[25px] md:text-base md:leading-[28px] text-neutral">
              {techInfo.desc}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
