
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "superman", password: "$2y$10$rVdT65PdBrdLtFj7yRdbpe0vSUqVvPt5OBTOaIBkQW6NWMlHFDDgu", created_at: "2020-02-29 00:30:00", first_name:"Clark", last_name:"Kent", email:"superman@savetheworld.net", prize_points:"50", zipcode: "37660", city:"Kingsport", state:"TN"},
        {username: "joker", password: "$2y$10$bn2NiLjURk6BOJdvE4bwo.U/aVXx1FH4HgPJhVkeiD2fU6z/YaZru", created_at: "2020-02-29 00:35:00", first_name:"Joker", last_name:"", email:"jokerman@gmail.com", prize_points:"10", zipcode: "37813", city:"Morristown", state:"TN"},
        {username: "username", password: "$2y$10$8IS39ywiMVvuBqHAGLsLV..E64JehMxABJWgKWiEIr8zmWZ98UzYO", created_at: "2020-02-30 00:40:00", first_name:"Tester", last_name:"Account", email:"test@account.com", prize_points:"15", zipcode: "37877", city:"Talbott", state:"TN"},
        {username: "mario", password: "$2y$10$.v9fqTEyrwlYB5iJJ5/kC.i1PfeThGa.7YR.T9yd9hDKC1L4vYyNO", created_at: "2020-02-30 00:45:00", first_name:"Bowser", last_name:"Bullett", email:"bowser@supermario.net", prize_points:"5", zipcode: "37890", city:"White Pine", state:"TN"}
      ]);
    });
};

// {username: "", password: "", created_at: "", first_name:"", last_name:"", email:"", prize_points:"", zipcode: "", city:"", state:""}
// {username: "joker", password: "harley", created_at: "2020-02-29 00:35:00", first_name:"Joker", last_name:"", email:"jokerman@gmail.com", prize_points:"10", zipcode: "47130", city:"Jeffresonville", state:"IN"}

/*

superman : batman
joker : harley
username : password
mario : bowser

*/