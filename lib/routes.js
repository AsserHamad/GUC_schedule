FlowRouter.route('/',{
    name: 'home',
    action(){
      (Meteor.userId())?BlazeLayout.render('MainLayout', {main: 'Dashboard'}):BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
      document.title = (Meteor.userId())?"Dashboard":"GUC Assistant";
    }
})
FlowRouter.route('/tutorials',{
  name:'tutorials',
  action(){
    (Meteor.userId())?BlazeLayout.render('MainLayout', {main: 'TutorialsLayout'}):BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
  }
});
FlowRouter.route('/requests',{
  name:'requests',
  action(){
    (Meteor.userId())?BlazeLayout.render('MainLayout', {main: 'RequestsLayout'}):BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
  }
});
FlowRouter.route('/subjects',{
  name:'subjects',
  action(){
    (Meteor.userId())?BlazeLayout.render('MainLayout', {main: 'SubjectsLayout'}):BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
  }
})
