// All Tomorrow's Parties -- client

Meteor.subscribe("directory");
Meteor.subscribe("parties");

// If no party selected, or if the selected party was deleted, select one.
Meteor.startup(function () {
  Deps.autorun(function () {
    var selected = Session.get("selected");
    if (! selected || ! Parties.findOne(selected)) {
      var party = Parties.findOne();
      if (party)
        Session.set("selected", party._id);
      else
        Session.set("selected", null);
    }
  });
});