
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { created_at: "2020-02-27 12:00:00", creator_id: "1", title: "Down Power Lines", desc: "On Main Street, there's a few down Power Lines from the storm the other night blocking the main roads.", upvotes: "10", downvotes:"3", resolved:"false", zipcode: "37660", city:"Kingsport", state:"TN" },
        { created_at: "2020-02-28 3:00:00", creator_id: "2", title: "Pot Hole Alert", desc: "Pothole on McDonalds lane, just blew a tire driving over it!", upvotes: "5", downvotes:"2", resolved:"false", zipcode: "37813", city:"Morristown", state:"TN"},
        { created_at: "2020-02-28 5:00:00", creator_id: "1", title: "Power Outage", desc: "Power Outage on Justice Street, the whole streets out of power. ", upvotes: "8", downvotes:"0", resolved:"true", zipcode: "37877", city:"Talbott", state:"TN"},
        { created_at: "2020-02-29 7:00:00", creator_id: "2", title: "Noise Complaint", desc: "My downstairs neighbors are way too loud! Always staying up really early and sleeping really late.", upvotes: "2", downvotes:"0", resolved:"false", zipcode: "37813", city:"Morristown", state:"TN"},
        { created_at: "2020-02-29 2:00:00", creator_id: "1", title: "Cows Loose on Main Road", desc: "Farmer Freds cows got loose again, seems that the fence broke and they ran out into the streets!", upvotes: "7", downvotes:"3", resolved:"true", zipcode: "37660", city:"Kingsport", state:"TN"}
      ]);
    });
};

// { created_at: "", creator_id: "", title: "", desc: "", upvotes: "", downvotes:"", resolved:"", zipcode: "", city: "", location: ""}