export const photoWidth = "240";
export const photoHeight = "240";
export const searchCategories = ["Birds", "Food", "Cages", "Other"];

export const birdNames = ["Bird1", "Bird2", "Bird3", "Bird4", "Bird5", "Bird6"];

export const birdPhotosPaths = birdNames.map((name) => `/photos/${name}.jpg`);
export const getBirdNameFromPath = (path: string) => {
  const name = path.match(/(Bird)\d+/g);

  return name;
};
