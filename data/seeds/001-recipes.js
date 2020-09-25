exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Recipes").insert([
        { RecipeName: "Ramen Noodles" },
        { RecipeName: "Toast" },
        { RecipeName: "Scrambled_Eggs" },
      ]);
    });
};
