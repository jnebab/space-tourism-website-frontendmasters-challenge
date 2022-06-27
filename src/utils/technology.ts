export enum TechnologyNames {
  LAUNCHVEHICLE = "LAUNCHVEHICLE",
  SPACEPORT = "SPACEPORT",
  SPACECAPSULE = "SPACECAPSULE",
}

export const technologies: string[] = [
  TechnologyNames.LAUNCHVEHICLE,
  TechnologyNames.SPACEPORT,
  TechnologyNames.SPACECAPSULE,
];

export enum TechnologyImages {
  LAUNCHVEHICLE_PORTRAIT = "lg:bg-launch-vehicle-portrait",
  LAUNCHVEHICLE_LANDSCAPE = "bg-launch-vehicle-landscape",
  SPACEPORT_PORTRAIT = "lg:bg-space-port-portrait",
  SPACEPORT_LANDSCAPE = "bg-space-port-landscape",
  SPACECAPSULE_PORTRAIT = "lg:bg-space-capsule-portrait",
  SPACECAPSULE_LANDSCAPE = "bg-space-capsule-landscape",
}

const TechData = {
  [TechnologyNames.LAUNCHVEHICLE]: {
    name: "Launch Vehicle",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  [TechnologyNames.SPACEPORT]: {
    name: "Spaceport",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  [TechnologyNames.SPACECAPSULE]: {
    name: "Space Capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

export const TechnologyInfo = {
  [TechnologyImages.LAUNCHVEHICLE_PORTRAIT]:
    TechData[TechnologyNames.LAUNCHVEHICLE],
  [TechnologyImages.LAUNCHVEHICLE_LANDSCAPE]:
    TechData[TechnologyNames.LAUNCHVEHICLE],
  [TechnologyImages.SPACEPORT_PORTRAIT]: TechData[TechnologyNames.SPACEPORT],
  [TechnologyImages.SPACEPORT_LANDSCAPE]: TechData[TechnologyNames.SPACEPORT],
  [TechnologyImages.SPACECAPSULE_PORTRAIT]:
    TechData[TechnologyNames.SPACECAPSULE],
  [TechnologyImages.SPACECAPSULE_LANDSCAPE]:
    TechData[TechnologyNames.SPACECAPSULE],
};
