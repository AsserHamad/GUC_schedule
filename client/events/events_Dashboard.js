Template.Dashboard.events({
  'click .btn_year': function(){
    Meteor.call('updateYear',this.toString(),function(){
      console.log("Succesfully updated year!");
      console.log(Meteor.user());
    });
  }
})
