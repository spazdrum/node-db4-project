const db = require("../data/connect");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipeByIngredient,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(Recipe_Id) {
  return db("Ingredients")
    .join("RecipeService", "RecipeService.Ingredients_Id", "Ingredients_Id")
    .join("Recipes", "RecipeServices.Recipe_Id", "Recipes.id")
    .select("Ingredients.*", "RecipeServices.Quantity", "Recipes.RecipeName")
    .where("recipe_id", "=", recipe_id);
}

function getInstructions() {
  return db("Instructions")
    .select("Instructions.*", "Recipes.RecipeName")
    .join("Recipes", "Instructions.Recipe_Id", "Recipes.Id")
    .where("recipe_id", "=", recipe_id);
}

function getRecipeByIngredient() {
  return db("ingredients")
    .join("RecipeServices", "RecipeServices.Ingredients_Id", "Ingredients.Id")
    .join("Recipes", "RecipeServices.Recipe_Id", "Recipes.Id")
    .select(
      "Recipes.*",
      "Ingredients.name as Ingredient_Name",
      "ingredients.id as Ingredient_Id"
    )
    .where("Ingredients.id", "=", id);
}
