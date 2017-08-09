function plot(ticker){
  var bounces = 1;
  var danceBendPeak = 30;
  var pathA = 2;
  var conicPathRad = radians(70); //size 0 if zero
  var danceSpinEach = 30;
  var wrapRotations = 2;

  //OTHER PATH
  var pathConicE = sqrt((pathA*pathA)-1)/pathA;
  var pathSize = sin(conicPathRad);
  var pathCenteredY = pathConicE*cos(conicPathRad);
  var pathObj = intersection(1/pathA,sin(conicPathRad),pathCenteredY);

  // var burstStart = 2;
  var high1 = 3;
  var low1 = 2.5;
  var high2 = 2.8;
  var low2 = 2.5;
  var burstD = d;
  var heartbeats = 1;
  console.log(pathSize)
  console.log(pathCenteredY)

  //KEY
  var bounceVar = bounceArr(bounces,d,danceBendPeak);
  var path = ellipse(d,pathA,pathSize,pathCenteredY);
  var danceSpinArr = regulate(d,danceSpinEach);
  var wrapTwistUse = (360/d)*wrapRotations;
  var plotSize = burst(burstD,heartbeats,high1,low1,high2,low2)[ticker];
  //WRAP
  var tilt = atan(path.x[ticker]/path.y[ticker]);

  var tiltObj = {
    x: path.x[ticker],
    y: path.y[ticker]
  }

  var baseRad = wrapTwistUse * ticker;
  var a = 1/path.y[ticker];
  //DANCE
  var tPeak = radians(bounceVar[ticker]);
  var start = danceSpinArr[ticker];
//console.log(path)


  //OTHER WRAP
  var addToStart = 0;
  var addToCandD = 20;
  var dWrap = 100;
  var n = 2.4;
  var f1 = 1;
  var f2 = 1.1;
  var bAndDSize = .8;
  var baseAdd = (360/3);
  //OTHER DANCE
  var dDance = 100;
  var start2 = -start/2;
  var t1 = radians(12);
  var t2 = radians(10.5);
  var t3 = radians(10.1);
  var t4 = radians(-4);
  var f = 40;
  var v = -10;
  var sized = .03;



  var back1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),tilt,'back','back',pathObj,tiltObj);
  var back2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+baseAdd*1),radians(addToCandD),tilt,'back','back',pathObj,tiltObj);
  var back3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),tilt,'back','back',pathObj,tiltObj);

  var dance = makeDancer(dDance,tPeak,start,start2,t1,t2,t3,t4,f,v,sized);

  var front1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),tilt,'front','front',pathObj,tiltObj);
  var front2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*1)),radians(addToCandD),tilt,'front','front',pathObj,tiltObj);
  var front3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),tilt,'front','front',pathObj,tiltObj);


  var extra = 'windowsize 700 700' + '</br>' + 'blinewidth 2 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
  var location = '</br>' + 'savejpg /Users/royschuyler/Desktop/auto8/' + ticker + '.jpg 2' + '</br>';
  finish = back1 + back2 + back3 + dance + front1 + front2 + front3 + extra + location;
  //finish = dance + extra;
  return finish
}

var d = 80;

var plot0 = plot(1);
finalCount = 0;
// var plot1 = plot(1);
// finalCount = 0;
// var plot2 = plot(2);
// finalCount = 0;
// var plot3 = plot(3);
// finalCount = 0;
// var plot4 = plot(4);
// finalCount = 0;
// var plot5 = plot(5);
// finalCount = 0;
// var plot6 = plot(6);
// finalCount = 0;
// var plot7 = plot(7);
// finalCount = 0;
// var plot8 = plot(8);
// finalCount = 0;
// var plot9 = plot(9);
// finalCount = 0;
// var plot10 = plot(10);
// finalCount = 0;
// var plot11 = plot(11);
// finalCount = 0;
// var plot12 = plot(12);
// finalCount = 0;
// var plot13 = plot(13);
// finalCount = 0;
// var plot14 = plot(14);
// finalCount = 0;
// var plot15 = plot(15);
// finalCount = 0;
// var plot16 = plot(16);
// finalCount = 0;
// var plot17 = plot(17);
// finalCount = 0;
// var plot18 = plot(18);
// finalCount = 0;
// var plot19 = plot(19);
// finalCount = 0;
// var plot20 = plot(20);
// finalCount = 0;
// var plot21 = plot(21);
// finalCount = 0;
// var plot22 = plot(22);
// finalCount = 0;
// var plot23 = plot(23);
// finalCount = 0;
// var plot24 = plot(24);
// finalCount = 0;
// var plot25 = plot(25);
// finalCount = 0;
// var plot26 = plot(26);
// finalCount = 0;
// var plot27 = plot(27);
// finalCount = 0;
// var plot28 = plot(28);
// finalCount = 0;
// var plot29 = plot(29);
// finalCount = 0;
// var plot30 = plot(30);
// finalCount = 0;
// var plot31 = plot(31);
// finalCount = 0;
// var plot32 = plot(32);
// finalCount = 0;
// var plot33 = plot(33);
// finalCount = 0;
// var plot34 = plot(34);
// finalCount = 0;
// var plot35 = plot(35);
// finalCount = 0;
// var plot36 = plot(36);
// finalCount = 0;
// var plot37 = plot(37);
// finalCount = 0;
// var plot38 = plot(38);
// finalCount = 0;
// var plot39 = plot(39);
// finalCount = 0;
// var plot40 = plot(40);
// finalCount = 0;
// var plot41 = plot(41);
// finalCount = 0;
// var plot42 = plot(42);
// finalCount = 0;
// var plot43 = plot(43);
// finalCount = 0;
// var plot44 = plot(44);
// finalCount = 0;
// var plot45 = plot(45);
// finalCount = 0;
// var plot46 = plot(46);
// finalCount = 0;
// var plot47 = plot(47);
// finalCount = 0;
// var plot48 = plot(48);
// finalCount = 0;
// var plot49 = plot(49);
// finalCount = 0;
// var plot50 = plot(50);
// finalCount = 0;
// var plot51 = plot(51);
// finalCount = 0;
// var plot52 = plot(52);
// finalCount = 0;
// var plot53 = plot(53);
// finalCount = 0;
// var plot54 = plot(54);
// finalCount = 0;
// var plot55 = plot(55);
// finalCount = 0;
// var plot56 = plot(56);
// finalCount = 0;
// var plot57 = plot(57);
// finalCount = 0;
// var plot58 = plot(58);
// finalCount = 0;
// var plot59 = plot(59);
// finalCount = 0;
// var plot60 = plot(60);
// finalCount = 0;
// var plot61 = plot(61);
// finalCount = 0;
// var plot62 = plot(62);
// finalCount = 0;
// var plot63 = plot(63);
// finalCount = 0;
// var plot64 = plot(64);
// finalCount = 0;
// var plot65 = plot(65);
// finalCount = 0;
// var plot66 = plot(66);
// finalCount = 0;
// var plot67 = plot(67);
// finalCount = 0;
// var plot68 = plot(68);
// finalCount = 0;
// var plot69 = plot(69);
// finalCount = 0;
// var plot70 = plot(70);
// finalCount = 0;
// var plot71 = plot(71);
// finalCount = 0;
// var plot72 = plot(72);
// finalCount = 0;
// var plot73 = plot(73);
// finalCount = 0;
// var plot74 = plot(74);
// finalCount = 0;
// var plot75 = plot(75);
// finalCount = 0;
// var plot76 = plot(76);
// finalCount = 0;
// var plot77 = plot(77);
// finalCount = 0;
// var plot78 = plot(78);
// finalCount = 0;
// var plot79 = plot(79);
// finalCount = 0;

var element = document.getElementById('p1');

var textToSave = 'new' + '</br>' + plot0 + '</br>';
// 'new' + '</br>' + plot1 + '</br>' +
// 'new' + '</br>' + plot2 + '</br>' +
// 'new' + '</br>' + plot3 + '</br>' +
// 'new' + '</br>' + plot4 + '</br>' +
// 'new' + '</br>' + plot5 + '</br>' +
// 'new' + '</br>' + plot6 + '</br>' +
// 'new' + '</br>' + plot7 + '</br>' +
// 'new' + '</br>' + plot8 + '</br>' +
// 'new' + '</br>' + plot9 + '</br>' +
// 'new' + '</br>' + plot10 + '</br>' +
// 'new' + '</br>' + plot11 + '</br>' +
// 'new' + '</br>' + plot12 + '</br>' +
// 'new' + '</br>' + plot13 + '</br>' +
// 'new' + '</br>' + plot14 + '</br>' +
// 'new' + '</br>' + plot15 + '</br>' +
// 'new' + '</br>' + plot16 + '</br>' +
// 'new' + '</br>' + plot17 + '</br>' +
// 'new' + '</br>' + plot18 + '</br>' +
// 'new' + '</br>' + plot19 + '</br>' +
// 'new' + '</br>' + plot20 + '</br>' +
// 'new' + '</br>' + plot21 + '</br>' +
// 'new' + '</br>' + plot22 + '</br>' +
// 'new' + '</br>' + plot23 + '</br>' +
// 'new' + '</br>' + plot24 + '</br>' +
// 'new' + '</br>' + plot25 + '</br>' +
// 'new' + '</br>' + plot26 + '</br>' +
// 'new' + '</br>' + plot27 + '</br>' +
// 'new' + '</br>' + plot28 + '</br>' +
// 'new' + '</br>' + plot29 + '</br>' +
// 'new' + '</br>' + plot30 + '</br>';
// var textToSave = 'new' + '</br>' + plot31 + '</br>' +
// 'new' + '</br>' + plot32 + '</br>' +
// 'new' + '</br>' + plot33 + '</br>' +
// 'new' + '</br>' + plot34 + '</br>' +
// 'new' + '</br>' + plot35 + '</br>' +
// 'new' + '</br>' + plot36 + '</br>' +
// 'new' + '</br>' + plot37 + '</br>' +
// 'new' + '</br>' + plot38 + '</br>' +
// 'new' + '</br>' + plot39 + '</br>' +
// 'new' + '</br>' + plot40 + '</br>' +
// 'new' + '</br>' + plot41 + '</br>' +
// 'new' + '</br>' + plot42 + '</br>' +
// 'new' + '</br>' + plot43 + '</br>' +
// 'new' + '</br>' + plot44 + '</br>' +
// 'new' + '</br>' + plot45 + '</br>' +
// 'new' + '</br>' + plot46 + '</br>' +
// 'new' + '</br>' + plot47 + '</br>' +
// 'new' + '</br>' + plot48 + '</br>' +
// 'new' + '</br>' + plot49 + '</br>' +
// 'new' + '</br>' + plot50 + '</br>' +
// 'new' + '</br>' + plot51 + '</br>' +
// 'new' + '</br>' + plot52 + '</br>' +
// 'new' + '</br>' + plot53 + '</br>' +
// 'new' + '</br>' + plot54 + '</br>' +
// 'new' + '</br>' + plot55 + '</br>' +
// 'new' + '</br>' + plot56 + '</br>' +
// 'new' + '</br>' + plot57 + '</br>' +
// 'new' + '</br>' + plot58 + '</br>' +
// 'new' + '</br>' + plot59 + '</br>' +
// 'new' + '</br>' + plot60 + '</br>' +
// 'new' + '</br>' + plot61 + '</br>' +
// 'new' + '</br>' + plot62 + '</br>' +
// 'new' + '</br>' + plot63 + '</br>' +
// 'new' + '</br>' + plot64 + '</br>' +
// 'new' + '</br>' + plot65 + '</br>' +
// 'new' + '</br>' + plot66 + '</br>' +
// 'new' + '</br>' + plot67 + '</br>' +
// 'new' + '</br>' + plot68 + '</br>' +
// 'new' + '</br>' + plot69 + '</br>' +
// 'new' + '</br>' + plot70 + '</br>' +
// 'new' + '</br>' + plot71 + '</br>' +
// 'new' + '</br>' + plot72 + '</br>' +
// 'new' + '</br>' + plot73 + '</br>' +
// 'new' + '</br>' + plot74 + '</br>' +
// 'new' + '</br>' + plot75 + '</br>' +
// 'new' + '</br>' + plot76 + '</br>' +
// 'new' + '</br>' + plot77 + '</br>' +
// 'new' + '</br>' + plot78 + '</br>' +
// 'new' + '</br>' + plot79 + '</br>';


element.innerHTML = textToSave + '</br>';
var hiddenElement = document.createElement('a');


// hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
// hiddenElement.target = '_blank';
// hiddenElement.download = 'tester' + '_.txt';
// hiddenElement.click();







