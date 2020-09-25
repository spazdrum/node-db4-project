exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Instructions").insert([
        {
          Recipe_Id: 1,
          Step_Number: 1,
          Step: "Place Ramen into bowl and poor boiling water over the top",
        },
        {
          Recipe_Id: 1,
          Step_Number: 2,
          Step: "Wait 5 minutes, then mix together with fork",
        },
        { Recipe_Id: 1, Step_Number: 3, Step: "Enjoy your soup!" },
        { Recipe_Id: 2, Step_Number: 1, Step: "Get Bread" },
        {
          Recipe_Id: 2,
          Step_Number: 2,
          Step: "Place in Toaster for 2.5 minutes",
        },
        {
          Recipe_Id: 2,
          Step_Number: 3,
          Step: "Talk smack to bread while consuming",
        },
        { Recipe_Id: 3, Step_Number: 1, Step: "Crack Eggs into pan" },
        { Recipe_Id: 3, Step_Number: 2, Step: "Watch vigorously as egg cooks" },
        { Recipe_Id: 3, Step_Number: 3, Step: "Consume the chicken un-born" },
      ]);
    });
};
