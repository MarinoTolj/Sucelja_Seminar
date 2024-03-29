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

export const birdPhotosPaths = birdNames.map(
  (name) => `/photos/birds/${name}.jpg`
);
export const getBirdNameFromPath = (path: string) => {
  const name = path.split("/photos/birds/")[1];
  const foo = name.split(".jpg")[0];

  return foo[0].toUpperCase() + foo.slice(1);
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
  const name = path.split("/photos/food/")[1];
  const foo = name.split(".jpg")[0];

  return foo[0].toUpperCase() + foo.slice(1);
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
  const name = path.split("/photos/cages/")[1];
  const foo = name.split(".jpg")[0];

  return foo[0].toUpperCase() + foo.slice(1);
};

export const otherNames = [
  "Blue fluff",
  "Brown fluff",
  "Pink fluff",
  "Scarecrow",
  "Toy birds",
  "Whistle",
];

export const otherPhotosPaths = otherNames.map(
  (name) => `/photos/other/${name}.jpg`
);
export const getOtherNameFromPath = (path: string) => {
  const name = path.split("/photos/other/")[1];
  const foo = name.split(".jpg")[0];

  return foo[0].toUpperCase() + foo.slice(1);
};
