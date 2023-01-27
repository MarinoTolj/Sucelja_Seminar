export const searchCategories = ["Birds", "Food", "Cages", "Other"] as const;

export type SearchCategories = typeof searchCategories[number];
