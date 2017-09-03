Template.TutorialsLayout.events({
  'click .enroll':function(){
    if(Template.instance().current_tut && Meteor.user()){
      Meteor.call('enroll',Meteor.user(),Template.instance().current_tut.get()+'',function(){
        console.log(Meteor.user().profile.tutorial);
      })
    }
  }
})
