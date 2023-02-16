export const photoWidth = "240";
export const photoHeight = "240";
export const searchCategories = ["Birds", "Food", "Cages", "Other"];

export const birdNames = [
  "Green Parrot",
  "White Parrot",
  "Crow",
  "Robin",
  "Canary",
  "Eagle",
];

export const birdPhotosPaths = birdNames.map((name) => `/photos/${name}.jpg`);
export const getBirdNameFromPath = (path: string) => {
  const name = path.split("/photos/")[1];
  const foo = name.split(".jpg")[0];

  return foo;
};
