export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strTags: string | null;
  strMealThumb: string | null;
};

export type Workout = {
  id: string;
  name: string;
  type: string;
  muscle: string;
  difficulty: string;
  instructions: string;
};
