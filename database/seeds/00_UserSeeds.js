
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "superman", password: "batman", created_at: "2020-02-29 00:30:00"},
        {username: "joker", password: "harley", created_at: "2020-02-29 00:35:00"},
        {username: "username", password: "password", created_at: "2020-02-29 00:40:00"}
      ]);
    });
};

// {username: "", password: "", created_at: ""}
