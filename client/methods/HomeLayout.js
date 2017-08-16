Template.HomeLayout.events({
  'submit .form_login': function(event){
    event.preventDefault();
    var username = event.target.username.value,
        password = event.target.password.value;
    Meteor.loginWithPassword(username, password, function(err){
      if(err)swal(err.reason,"", "error");
      else swal({title: "Login Successful!", confirmButtonText:"Take me home", type: "success"},function(){FlowRouter.reload();})
    })
  },
  'submit .form_register': function(event){
    event.preventDefault();
    var username = event.target.username.value,
        password = event.target.password.value,
        email = event.target.email.value,
        f_name = event.target.f_name.value,
        l_name = event.target.l_name.value;
    var data = {
      username: username,
      password: password,
      email: email,
      profile:{
        f_name: f_name,
        l_name: l_name
      }
    };
    console.log(data);
    Accounts.createUser(data,function(err){
      if(err) swal(error.reason,"", "error");
      else {
        swal({title: "Register Succesful!", confirmButtonText:"Take me home", type: "success"},function(){FlowRouter.reload();})
      }
    })
  }
})
