import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    addMajor(major){
      Meteor.users.update(Meteor.user(),{
        $set:{
          profile:{
            major: major
          }
        }
      })
    },
    updateYear(year){
      let profile = Meteor.user().profile;
      profile.year = year
      Meteor.users.update(Meteor.user(),{$set:{
        profile:profile
      }});
    }
  })
});
