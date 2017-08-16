Template.MainLayout.events({
  'click .logout': function(){
    Meteor.logout();
    FlowRouter.go('/');
    BlazeLayout.render('MainLayout', {main: 'HomeLayout'})
  }
})
