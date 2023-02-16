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

export const foodNames = [
  "Apples",
  "Berries",
  "Corn",
  "Fish",
  "Rye",
  "Sunflower",
];

export const foodPhotosPaths = foodNames.map(
  (name) => `/photos/food/${name}.jpg`
);
export const getFoodNameFromPath = (path: string) => {
  const name = path.match(/(Bird)\d+/g);

  return name;
};

export const cageNames = [
  "Brown cage",
  "Cottage cage",
  "Green cage",
  "Metal cage",
  "Round cage",
  "Wooden cage",
];

export const cagePhotosPaths = cageNames.map(
  (name) => `/photos/cages/${name}.jpg`
);
export const getCageNameFromPath = (path: string) => {
  const name = path.match(/(Bird)\d+/g);

  return name;
};
