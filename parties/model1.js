/*
 Each attraction is represented by a document in the Parties collection:
 owner: user id
 x, y: Number latit)
 title, description: String
 public: Boolean
 invited: Array of user id's that are invited (only if !public)
 rsvps: Array of objects like {user: userId, rsvp: "yes"} (or "no"/"maybe")
 */

Locations = new Meteor.collection("locations");

Locations.allow({
    insert: function (userId, location) {
    return false; // no cowboy inserts - use createLocation method
    },
    update: function (userId, location, fields, modifier) {
        if (userId!== location.owners)

)