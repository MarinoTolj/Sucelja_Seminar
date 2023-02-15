export const photoWidth = "240";
export const photoHeight = "240";
export const searchCategories = ["Birds", "Food", "Cages", "Other"];

export const birdNames = [
  "GreenParrot",
  "WhiteParrot",
  "Crow",
  "Robin",
  "Canary",
  "Eagle",
];

export const birdPhotosPaths = birdNames.map((name) => `/photos/${name}.jpg`);
export const getBirdNameFromPath = (path: string) => {
  const name = path.match(/(Bird)\d+/g);

  return name;
};
