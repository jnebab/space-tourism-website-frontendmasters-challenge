export enum CrewNames {
  MARKSHUTTLEWORTH = "MARKSHUTTLEWORTH",
  VICTORGLOVER = "VICTORGLOVER",
  ANOUSHEHANSARI = "ANOUSHEHANSARI",
  DOUGLASHURLEY = "DOUGLASHURLEY",
}

export const crew: string[] = [
  CrewNames.MARKSHUTTLEWORTH,
  CrewNames.VICTORGLOVER,
  CrewNames.ANOUSHEHANSARI,
  CrewNames.DOUGLASHURLEY,
];

export enum CrewImages {
  MARKSHUTTLEWORTH = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223108/space-tourism/image-mark-shuttleworth_xydi93.webp",
  VICTORGLOVER = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223108/space-tourism/image-victor-glover_shnbo1.webp",
  ANOUSHEHANSARI = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223108/space-tourism/image-anousheh-ansari_xqawif.webp",
  DOUGLASHURLEY = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223108/space-tourism/image-douglas-hurley_qpvar2.webp",
}

export const CrewInfo = {
  [CrewImages.MARKSHUTTLEWORTH]: {
    name: "Mark Shuttleworth",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    role: "Mission Specialist ",
  },
  [CrewImages.VICTORGLOVER]: {
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    role: "Pilot",
  },
  [CrewImages.ANOUSHEHANSARI]: {
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    role: "Flight Engineer",
  },
  [CrewImages.DOUGLASHURLEY]: {
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    role: "Commander",
  },
};
