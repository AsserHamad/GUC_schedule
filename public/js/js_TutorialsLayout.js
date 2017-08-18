var tut_count = [{
  major: 'CSEN',
  count: 8,
  start: 10
},{
  major: 'DMET',
  count: 1,
  start: 11
},{
  major: 'Mechatronics',
  count: 9,
  start: 1
}];
var x = $("#_major").html();
console.log("You major is "+x);
for(var i=0;i<tut_count[tut_count.findIndex(y => y.major==x)].count;i++){
  var tut = tut_count[tut_count.findIndex(y => y.major==x)].start+i;
  console.log("tut is "+tut+" but the butt says"+$("#current_tut").html());
  var butt = (tut==$("#current_tut").html())?'my_tut':'tut_btn';
  $("#butts").html($("#butts").html()+
    '<button class="center-block text-center '+butt+'" value="T'+tut+'">T'+tut+'</button><br>'
  )
}
