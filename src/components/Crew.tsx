import { useState } from "react";
import { crew, CrewImages, CrewInfo } from "../utils/crew";
import cx from "classnames";

export default function Crew() {
  const [crewSrc, setCrewSrc] = useState(CrewImages.MARKSHUTTLEWORTH);
  const [crewInfo, setCrewInfo] = useState(CrewInfo[crewSrc]);
  return (
    <section className="text-center grid place-items-center md:mt-10 w-full">
      <div className="flex w-full justify-center md:justify-start">
        <h4 className="text-white uppercase flex md:text-2xl md:ml-10">
          <span className="opacity-25 mr-[18px]">02</span> Meet your crew
        </h4>
      </div>
      <div className="flex flex-col md:flex-col-reverse justify-center items-center mt-8 md:mt-10">
        <div className="md:hidden  border-b border-dark w-11/12 grid place-items-center">
          <img
            src={crewSrc}
            alt="crew"
            className="w-[170px] h-[170px] object-contain "
          />
        </div>
        <div className="lg:grid lg:grid-cols-5">
          <div className="lg:col-start-1 lg:col-end-4">
            <div className="md:hidden mt-8 flex space-x-4 justify-center md:mt-10">
              {crew.map((c) => (
                <div
                  key={c}
                  onClick={() => {
                    setCrewSrc(CrewImages[c]);
                    setCrewInfo(CrewInfo[CrewImages[c]]);
                  }}
                  className={cx(
                    "w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full",
                    {
                      "bg-white": CrewImages[c] === crewSrc,
                      "bg-[#979797]": CrewImages[c] !== crewSrc,
                    }
                  )}
                />
              ))}
            </div>
            {!!crewInfo ? (
              <div className="mt-8 text-white text-center px-6 md:px-[124px] lg:mt-[114px] lg:text-left">
                <h4 className="text-white/50 uppercase text-base md:text-2xl font-serif md:mb-2 lg:mb-4 lg:text-4xl lg:leading-9">
                  {crewInfo.role}
                </h4>
                <h2 className="uppercase text-2xl font-serif mb-4 md:text-5xl lg:text-6xl lg:leading-[64px] md:leading-[45px] md:mb-4 lg:mb-6">
                  {crewInfo.name}
                </h2>
                <p className="text-[15px] md:text-base lg:text-lg lg:leading-8 lg:w-[40ch] text-neutral leading-[25px] font-normal font-sans">
                  {crewInfo.desc}
                </p>
              </div>
            ) : null}
            <div className=" mt-8 flex space-x-4 justify-center md:mt-10">
              {crew.map((c) => (
                <div
                  key={c}
                  onClick={() => {
                    setCrewSrc(CrewImages[c]);
                    setCrewInfo(CrewInfo[CrewImages[c]]);
                  }}
                  className={cx(
                    "w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full",
                    {
                      "bg-white": CrewImages[c] === crewSrc,
                      "bg-[#979797]": CrewImages[c] !== crewSrc,
                    }
                  )}
                />
              ))}
            </div>
          </div>
          <div
            className={cx(
              "hidden md:grid md:place-items-center w-full md:absolute lg:static md:bottom-0 lg:col-start-4 lg:col-end-6 ",
              {
                "md:-bottom-10": crewSrc === CrewImages.DOUGLASHURLEY,
              }
            )}
          >
            <img src={crewSrc} alt="crew" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
