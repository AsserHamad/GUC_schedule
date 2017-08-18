Template.TutorialsLayout.helpers({
  'currentMajor': function(){
    if(Meteor.user())
    return Meteor.users.findOne(Meteor.user()).profile.major;
  },
  'currentTut': function(){
    if(Meteor.user())
    return Meteor.users.findOne(Meteor.user()).profile.tutorial;
  },
  'userAdmin':function(){
    console.log(Meteor.user().profile);
    if(Meteor.user())
    return Meteor.user().profile.role=='admin';
  }
})
