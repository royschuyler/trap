


function plot(ticker){
  var bounces = 1;
  var danceBendPeak = 90;
  var pathA = 1.6;
  var pathSize = .3;
  var pathCenteredY = .6;
  var danceSpinEach = 30;
  var wrapRotations = 1;

  //OTHER BURST
  var burstStart = 1.7;
  var high1 = 1.3;
  var low1 = 1.4;
  var high2 = 1.2;
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
  var dWrap = 50;
  var n = 1.1;
  var f1 = 1;
  var f2 = 1.1;
  var bAndDSize = .85;
  var baseAdd = (360/3);
  //OTHER DANCE
  var dDance = 50;
  var start2 = -start/4;
  var t1 = radians(12);
  var t2 = radians(10);
  var t3 = radians(9);
  var t4 = radians(-4);
  var f = 25;
  var v = -8;
  var sized = .07;


  var back1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),tilt,'back','back');
  var back2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+baseAdd*1),radians(addToCandD),tilt,'back','back');
  var back3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),tilt,'back','back');

  var dance = makeDancer(dDance,tPeak,start,start2,t1,t2,t3,t4,f,v,sized);

  var front1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),tilt,'front','front');
  var front2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*1)),radians(addToCandD),tilt,'front','front');
  var front3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),tilt,'front','front');


  var extra = 'blinewidth 2 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x '  + -plotSize + ' ' + plotSize + '\n' + 'range y ' + -plotSize + ' ' + plotSize;
  var location = '\n' + 'savejpg /Users/royschuyler/Desktop/' + ticker + '.jpg 2' + '\n';
  finish = back1 + back2 + back3 + dance + front1 + front2 + front3 + extra + location;

  return finish
}

var d = 40;
// //var n = 5;
// console.log(plot(6));
// console.log(plot(7));

var d = 40;
var n0 = 11;
var n1 = 12;

var plot0 = plot(n0);
finalCount = 0;
var plot1 = plot(n1);
var textToSave = plot0 + '\n' + 'new' + '\n' + plot1;

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'test' + '_.txt';
hiddenElement.click();





