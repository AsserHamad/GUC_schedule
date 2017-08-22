Template.TutorialsLayout.events({
  'click .tut_btn':function(){
    var old = Template.instance().current_tut.get()
    Template.instance().current_tut.set(this);
    console.log("New current tut iiis "+Template.instance().current_tut.get());
      $("#"+this).removeClass('tut_btn');
      $("#"+this).addClass('curr_tut');
      $("#"+old).removeClass('curr_tut');
      $("#"+old).addClass('tut_btn');
    // if(Template.instance().current_tut) console.log("new current tut is "+this);
    // else console.log("yaya"+this);
  }
})
