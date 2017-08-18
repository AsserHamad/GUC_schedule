import { Meteor } from 'meteor/meteor';
import { Tutorials } from '../collections/tutorials.js';

Meteor.startup(() => {
  // code to run on server at startup
  let data = {
    'username': 'wolftrex',
    'password': 'elpsycongroo1',
    'email': 'asserhamad96@gmail.com',
    'profile':{
      'f_name': 'BadAsser',
      'l_name': 'Jones',
      'role': 'admin'
    }
  };
  try{
    Accounts.createUser(data);
  }catch(err){
    console.log(err);
  }

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
