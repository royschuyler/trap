function plot(ticker){
  var bounces = 1;
  var danceBendPeak = 90;
  var pathA = 1.6;
  var pathSize = .4;
  var pathCenteredY = .6;
  var danceSpinEach = 20;
  var wrapRotations = 1;

  //OTHER BURST
  var burstStart = 2;
  var high1 = 1.6;
  var low1 = 1.8;
  var high2 = 1.5;
  var burstD = d;
  //KEY
  var bounceVar = bounceArr(bounces,d,danceBendPeak);
  var path = ellipse(d,pathA,pathSize,pathCenteredY);
  var danceSpinArr = regulate(d,danceSpinEach);
  var wrapTwistUse = (360/d)*wrapRotations;
  var plotSize = burst(burstStart,high1,low1,high2,burstD)[ticker];
  //WRAP
  var tilt = atan(path.x[ticker]/path.y[ticker]);
  var baseRad = wrapTwistUse * ticker;
  var a = 1/path.y[ticker];
  //DANCE
  var tPeak = radians(bounceVar[ticker]);
  var start = danceSpinArr[ticker];

  //OTHER WRAP
  var addToStart = 0;
  var addToCandD = 15;
  var dWrap = 500;
  var n = 3;
  var f1 = 1;
  var f2 = 1.1;
  var bAndDSize = .85;
  var baseAdd = (360/3);
  //OTHER DANCE
  var dDance = 100;
  var start2 = -start/4;
  var t1 = radians(12);
  var t2 = radians(10);
  var t3 = radians(9.5);
  var t4 = radians(-12);
  var f = 25;
  var v = -10;
  var sized = .08;


  var back1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),tilt,'back','back');
  var back2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+baseAdd*1),radians(addToCandD),tilt,'back','back');
  var back3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),tilt,'back','back');

  var dance = makeDancer(dDance,tPeak,start,start2,t1,t2,t3,t4,f,v,sized);

  var front1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),tilt,'front','front');
  var front2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*1)),radians(addToCandD),tilt,'front','front');
  var front3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),tilt,'front','front');


  var extra = 'blinewidth 2 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
  var location = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto2/' + ticker + '.jpg 2' + '</br>';
  finish = back1 + back2 + back3 + dance + front1 + front2 + front3 + extra + location;

  return finish
}

var d = 40;

var plot0 = plot(0);
finalCount = 0;
var plot1 = plot(1);
finalCount = 0;
var plot2 = plot(2);
finalCount = 0;
var plot3 = plot(3);
finalCount = 0;
var plot4 = plot(4);
finalCount = 0;
var plot5 = plot(5);
finalCount = 0;
var plot6 = plot(6);
finalCount = 0;
var plot7 = plot(7);
finalCount = 0;
var plot8 = plot(8);
finalCount = 0;
var plot9 = plot(9);
finalCount = 0;
var plot10 = plot(10);
finalCount = 0;
var plot11 = plot(11);
finalCount = 0;
var plot12 = plot(12);
finalCount = 0;
var plot13 = plot(13);
finalCount = 0;
var plot14 = plot(14);
finalCount = 0;
var plot15 = plot(15);
finalCount = 0;
var plot16 = plot(16);
finalCount = 0;
var plot17 = plot(17);
finalCount = 0;
var plot18 = plot(18);
finalCount = 0;
var plot19 = plot(19);
finalCount = 0;
var plot20 = plot(20);
finalCount = 0;
var plot21 = plot(21);
finalCount = 0;
var plot22 = plot(22);
finalCount = 0;
var plot23 = plot(23);
finalCount = 0;
var plot24 = plot(24);
finalCount = 0;
var plot25 = plot(25);
finalCount = 0;
var plot26 = plot(26);
finalCount = 0;
var plot27 = plot(27);
finalCount = 0;
var plot28 = plot(28);
finalCount = 0;
var plot29 = plot(29);
finalCount = 0;
var plot30 = plot(30);
finalCount = 0;
var plot31 = plot(31);
finalCount = 0;
var plot32 = plot(32);
finalCount = 0;
var plot33 = plot(33);
finalCount = 0;
var plot34 = plot(34);
finalCount = 0;
var plot35 = plot(35);
finalCount = 0;
var plot36 = plot(36);
finalCount = 0;
var plot37 = plot(37);
finalCount = 0;
var plot38 = plot(38);
finalCount = 0;
var plot39 = plot(39);
finalCount = 0;

var element = document.getElementById('p1');

var textToSave = 'new' + '</br>' + plot0 + '</br>' +
'new' + '</br>' + plot1 + '</br>' +
'new' + '</br>' + plot2 + '</br>' +
'new' + '</br>' + plot3 + '</br>' +
'new' + '</br>' + plot4 + '</br>' +
'new' + '</br>' + plot5 + '</br>' +
'new' + '</br>' + plot6 + '</br>' +
'new' + '</br>' + plot7 + '</br>' +
'new' + '</br>' + plot8 + '</br>' +
'new' + '</br>' + plot9 + '</br>' +
'new' + '</br>' + plot10 + '</br>' +
'new' + '</br>' + plot11 + '</br>' +
'new' + '</br>' + plot12 + '</br>' +
'new' + '</br>' + plot13 + '</br>' +
'new' + '</br>' + plot14 + '</br>' +
'new' + '</br>' + plot15 + '</br>' +
'new' + '</br>' + plot16 + '</br>' +
'new' + '</br>' + plot17 + '</br>' +
'new' + '</br>' + plot18 + '</br>' +
'new' + '</br>' + plot19 + '</br>' +
'new' + '</br>' + plot20 + '</br>' +
'new' + '</br>' + plot21 + '</br>' +
'new' + '</br>' + plot22 + '</br>' +
'new' + '</br>' + plot23 + '</br>' +
'new' + '</br>' + plot24 + '</br>' +
'new' + '</br>' + plot25 + '</br>' +
'new' + '</br>' + plot26 + '</br>' +
'new' + '</br>' + plot27 + '</br>' +
'new' + '</br>' + plot28 + '</br>' +
'new' + '</br>' + plot29 + '</br>' +
'new' + '</br>' + plot30 + '</br>' +
'new' + '</br>' + plot31 + '</br>' +
'new' + '</br>' + plot32 + '</br>' +
'new' + '</br>' + plot33 + '</br>' +
'new' + '</br>' + plot34 + '</br>' +
'new' + '</br>' + plot35 + '</br>' +
'new' + '</br>' + plot36 + '</br>' +
'new' + '</br>' + plot37 + '</br>' +
'new' + '</br>' + plot38 + '</br>' +
'new' + '</br>' + plot39 + '</br>';


element.innerHTML = textToSave + '</br>';
var hiddenElement = document.createElement('a');
var hiddenElement2 = document.createElement('b');

// hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
// hiddenElement.target = '_blank';
// hiddenElement.download = 'tester' + '_.txt';
// hiddenElement.click();







