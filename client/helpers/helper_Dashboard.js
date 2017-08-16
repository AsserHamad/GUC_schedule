Template.Dashboard.helpers({
  'userMajor' : function(){
    return Meteor.users.findOne(Meteor.user()).profile.major;
  },
  'years': function(){
    let major = Meteor.user().profile.major.toLowerCase();
    console.log(major);
    return (major==='mngt')? [1,2,3,4]: [1,2,3,4,5];
  },
  'sameMajor': function(){
    return Meteor.user().profile.major==this.toString();
  },
  'sameYear': function(){
    return Meteor.user().profile.year==this.toString();
  }
})
