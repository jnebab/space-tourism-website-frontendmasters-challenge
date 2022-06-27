export enum SpaceDestinations {
  MOON = "moon",
  MARS = "mars",
  EUROPA = "europa",
  TITAN = "titan",
}

export const destinations: string[] = [
  SpaceDestinations.MOON,
  SpaceDestinations.MARS,
  SpaceDestinations.EUROPA,
  SpaceDestinations.TITAN,
];

export enum Destinations {
  MOON = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223078/space-tourism/image-moon_vjqzll.webp",
  EUROPA = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223078/space-tourism/image-europa_kz5lpt.webp",
  MARS = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223078/space-tourism/image-mars_nhvt4v.webp",
  TITAN = "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223078/space-tourism/image-titan_oehxdv.webp",
}

export const DestinationsInfo = {
  [Destinations.MOON]: {
    name: "Moon",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    aveDistance: "384,400 KM",
    estTravelTime: "3 DAYS",
  },
  [Destinations.EUROPA]: {
    name: "Europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    aveDistance: "628 MIL. KM",
    estTravelTime: "3 YEARS",
  },
  [Destinations.MARS]: {
    name: "Mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    aveDistance: "225 MIL. KM",
    estTravelTime: "9 MONTHS",
  },
  [Destinations.TITAN]: {
    name: "Titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    aveDistance: "1.6 BIL. KM",
    estTravelTime: "7 years",
  },
};
