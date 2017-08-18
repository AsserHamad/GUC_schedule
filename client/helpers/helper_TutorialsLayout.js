Template.TutorialsLayout.helpers({
  'currentMajor': function(){
    if(Meteor.user())
    return Meteor.users.findOne(Meteor.user()).profile.major;
  },
  'currentTut': function(){
    if(Meteor.user())
    return Meteor.users.findOne(Meteor.user()).profile.tutorial;
  }
})
