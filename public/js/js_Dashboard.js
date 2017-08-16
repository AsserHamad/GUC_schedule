var faculties = ["faculty_eng","faculty_pharmacy","faculty_aa","faculty_mngt","faculty_law"];
var eng = [{
    faculty: "MET",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>',
    majors: [{
      major:"Computer Science",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    },
    {
      major:"Digital Media",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    }]
  },
  {
    faculty: "EMS",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>',
    majors: [{
      major:"Mechatronics",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    },{
      major:"Civil",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    },{
      major:"Architecture",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    },{
      major:"Production",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    },{
      major:"Material Sciences",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    }]
  },
  {
    faculty: "IET",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>',
    majors: [{
      major:"Networks",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    },{
      major:"Communication",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    },{
      major:"Electric Engineering",
      icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
    }]
}];
var aa = {
    faculty: "AA",
    majors:[{
    major:"Graphic",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
  },{
    major:"Media",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
  },{
    major:"Product",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
}]};
var pharmacy = {
  faculty: "Pharmacy",
  majors: [{
    major: "Pharmacy",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
  },
  {
    major: "Pharmacy and Biotechnology",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
  }
]};
var mngt = {
    faculty: "Management",
    majors: [{
    major:"Management",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
  },{
    major:"Business Informatics",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
  },{
    major:"Technological Management",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
}]};
var law = {faculty: "law",
  majors: [{
    major:"Law",
    icon: '<i class="fa fa-desktop" aria-hidden="true"></i>'
}]};

$(document).ready(function(){
  var curr_faculty;
  var choice;
  for(let i=0;i<faculties.length;i++){
    $("#"+faculties[i]).on('click',function(){
      curr_faculty = faculties[i];
      for(let j=0;j<faculties.length;j++){
        if(faculties[j]!=curr_faculty){
          $("#"+faculties[j]).addClass("disappear");
          // $("#"+curr_faculty).animate({height:"50px",width:"50px",fontSize:"5px"},400);
        }else{
           $("#"+faculties[j]).addClass("disappear");
           $("#choice_1").css("animation","appear 2s forwards");
           switch(faculties[j]){
             case 'faculty_eng': choose_eng('faculty_eng',eng);break;
             case 'faculty_aa': chosen_faculty('faculty_aa',aa);break;
             case 'faculty_pharmacy': chosen_faculty('faculty_pharmacy',pharmacy);break;
             case 'faculty_mngt': chosen_faculty('faculty_mngt',mngt);break;
             case 'faculty_law': chosen_faculty('faculty_law',law);break;
           }
         }
      }
    })
  }
});
function choose_eng(name, facs){
  $("#choice_1").html($("#"+name).html());
  setTimeout(function(){
    $(".first").remove();
    for(let i=0;i<facs.length;i++){
      $(".second").html(
        $(".second").html()+'<button id="'+facs[i].faculty+'" name="'+facs[i].faculty+'" class="eng_btn">'+facs[i].faculty+'<br>'+facs[i].icon+'</button>'
      );
      $('#'+facs[i].faculty).attr('fac',JSON.stringify(facs[i]));
      console.log("I added "+'#'+facs[i].faculty);
      $("#"+facs[i].faculty).css("animation", "show_btns 1s forwards");
    }
    $(".eng_btn").on('click',function(){
      console.log(this.id);
      $(".second").addClass('disappear');
      console.log($("#"+this.id));
      chosen_faculty(this.name, JSON.parse($("#"+this.id).attr('fac')));
    })
  },1000);
}

function chosen_faculty(name, facs){
  $("#choice_1").html($("#"+name).html());
  setTimeout(function(){
    $(".first").remove();
    $(".second").remove();
    let third = $(".third");
    console.log(facs);
    for(let i=0;i<facs.majors.length;i++){
      third.html(
        third.html()+'<button id="'+facs.majors[i].major+'" class="major_btn">'+facs.majors[i].major+'<br>'+facs.majors[i].icon+'</button>'
      )
      console.log("The css right now [before] is "+$("#"+facs.majors[i].major).css('animation'));
      $("#"+facs.majors[i].major).css("animation", "show_btns 1s forwards");
      console.log($("#"+facs.majors[i].major).css());
      $("#"+facs.majors[i].major).attr("major", facs.majors[i].major);
    }
    $(".major_btn").on('click',function(){
      console.log(Meteor.users.find().fetch());
      Meteor.call('addMajor',$("#"+this.id).attr('major'),function(){
        swal({title: "Succesfully added major", confirmButtonText:"Take me home", type: "success"},function(){
          FlowRouter.go('/');
        })
      })
    })
  },500);
}

function changeClass(element, from, to){
  $(element).removeClass(from);
  $(element).addClass(to);
}
