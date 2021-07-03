exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("RecipeService")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("RecipeService").insert([
        { Ingredients_Id: 1, Recipe_id: 1, Quantity: 1 },
        { Ingredients_Id: 2, Recipe_id: 2, Quantity: 2 },
        { Ingredients_Id: 3, Recipe_id: 3, Quantity: 2 },
      ]);
    });
};
