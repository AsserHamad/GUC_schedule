Template.TutorialsLayout.helpers({
  'currentMajor': function(){
    if(Meteor.user())
    return Meteor.users.findOne(Meteor.user()).profile.major;
  },
  'currentTut': function(){
    return Template.instance().current_tut.get();
  },
  'userAdmin':function(){
    if(Meteor.user())
    return Meteor.user().profile.role=='admin';
  },
  'tuts':function(){
    return ['T10','T11','T12','T13','T14','T15','T16','T17']
  },
  'mytut':function(){
    if(Meteor.user())
    return this==Meteor.user().profile.tutorial;
  },
  'weekdays':function(){
    return ['Satuday','Sunday','Monday','Tuesday','Wednesday','Thursday']
  }
})
