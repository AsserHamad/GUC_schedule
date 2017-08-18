Template.Dashboard.helpers({
  'userMajor' : function(){
    if(Meteor.user()){
      $("#major").html(Meteor.users.findOne(Meteor.user()).profile.major);
      return Meteor.users.findOne(Meteor.user()).profile.major;
  }
  },
  'years': function(){
    if(Meteor.user()){
    let major = Meteor.user().profile.major.toLowerCase();
    console.log(major);
    return (major==='mngt')? [1,2,3,4]: [1,2,3,4,5];}
  },
  'sameMajor': function(){
    if(Meteor.user())
    return Meteor.user().profile.major==this.toString();
  },
  'sameYear': function(){
    if(Meteor.user())
    return Meteor.user().profile.year==this.toString();
  }
})
