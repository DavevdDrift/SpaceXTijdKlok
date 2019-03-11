function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);


}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}







//function startTime2() {
//  var today = new Date();
//  var h = today.getHours();
//  var m = today.getMinutes();
//  var s = today.getSeconds();
//  m = checkTime(m);
//  s = checkTime(s);
//  document.getElementById('txt2').innerHTML =
//  h + ":" + m + ":" + s;
//  var t = setTimeout(startTime, 500);
//}
//function checkTime(i) {
//  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//  return i;
//}



//var startTime = 0;
//var timeline = new TimelineMax({repeat : -1});

//function updateStopwatch(){
//  var currentTime = new Date();
//  var milliSeconds = currentTime.getTime() - startTime.getTime();

//  seconds = Math.round(milliSeconds/1000);

//  document.getElementById('stopwatch').innerHTML = seconds;
//}

//document.getElementById('start').onclick = function(){
//  startTime = new Date();

//  timeline.call(updateStopwatch)
//      .from('#stopwatch', 0.7, { top: -100, ease: Bounce.easeOut})
//      .to('#stopwatch', 0.3, { opacity: 0});
//}






var d = new Date();
if(d.getHours() >= 6 && d.getHours() < 8 ){
    $(".body1").show();
    $(".body2").hide();
    
    var txt = document.getElementById('txt');
    
    var tl1 = new TimelineMax({repeat:-1});
    tl1.to(Wolk, 50, {left: 370, ease: Sine.easeInOut});

    var tl1 = new TimelineMax({repeat:-1});
    tl1.to(Raket, 5, {top: -250, ease: Sine.easeInOut, delay: 15});
    tl1.to(Raket, 5, {top: 328, ease: Sine.easeInOut, delay: 15},);             
}

else {  
    $(".body1").hide();
    $(".body2").show();

    var txt = document.getElementById('txt2');

    var tl1 = new TimelineMax();
    tl1.to(txt, 1, {top: 105, ease: Sine.easeInOut});
    
    var tl1 = new TimelineMax({repeat:-1});
    tl1.to(RaketNacht, 5, {top: -220, ease: Sine.easeInOut, delay: 15});
    tl1.to(RaketNacht, 5, {top: 328, ease: Sine.easeInOut, delay: 15},);   
}


