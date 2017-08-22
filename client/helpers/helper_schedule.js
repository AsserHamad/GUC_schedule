Template.schedule.helpers({
  'weekdays':function(){
    return ['Satuday','Sunday','Monday','Tuesday','Wednesday','Thursday']
  },
  'current_tut':function(){
    if(Meteor.user() && Template.instance().current_tut){
      console.log("yo current tut iiis "+Template.instance().current_tut.get());
      return Template.instance().current_tut.get();

    }
  }
})
