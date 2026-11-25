/** Every content image, keyed as in reference-kit/assets/manifest.json. Swap files here to replace stand-ins. */
export const img = {
  teamLaunch: "/assets/photos/team-lab-launch.jpg",
  squad: "/assets/photos/gamr-team.jpg",
  labTalk: "/assets/photos/lab-session-talk.jpg",
  labDesk: "/assets/photos/lab-workstations-guests.jpg",
  labRoom: "/assets/photos/lab-room-guests.jpg",
  labEmpty: "/assets/photos/lab-room.jpg",
  studios: "/assets/photos/lab-workstations.jpg",
  caseHero: "/assets/photos/carven-lounge.jpg",
  esports: "/assets/photos/esports-event.png",
  mcl1: "/assets/games/my-city-life-1.png",
  mcl2: "/assets/games/my-city-life-2.png",
  mcl3: "/assets/games/my-city-life-3.png",
  afro: "/assets/games/afrodrive-illustration.png",
  crossroads: "/assets/games/crossroads-concept-illustration.png",
  teaser: "/assets/games/unannounced-teaser.jpg",
  spotifyCase: "/assets/case-studies/spotify.jpg",
} as const;

export type ImageSrc = (typeof img)[keyof typeof img];
