//END WORK
var addToStart = 0;
var addToCandD = 5;
var d = 100;
var n = 1.4;
var a = 1.61809332;
var f1 = 1;
var f2 = 1.1;
var bAndDSize = .95;
var twist = radians(10);
var baseRad = 20;
var baseAdd = (360/7);

//dance
var dDance = 100;
var tPeak = radians(5);
var start = 335;
var start2 = start/2;
var t1 = radians(12);
var t2 = radians(10);
var t3 = radians(9);
var t4 = radians(-4);
var f = 25;
var v = -8;
var sized = .07;


var back1 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),twist,'back','back');
var back2 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+180),radians(addToCandD),twist,'back','back');
//var back3 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),twist,'back');
//var back4 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*3)),radians(addToCandD),twist,'back');
//var back5 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*4)),radians(addToCandD),twist,'back');
//var back6 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*5)),radians(addToCandD),twist,'back');
//var back7 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*6)),radians(addToCandD),twist,'back');
//var finish = back1+back2+back3+back4+back5+back6+back7;



var dance = danceLook(dDance,tPeak,start,start2,t1,t2,t3,t4,f,v,sized);

var front1 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),twist,'front','front');
var front2 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+180),radians(addToCandD),twist,'front','front');
//var front3 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),twist,'front');
//var front4 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*3)),radians(addToCandD),twist,'front');
//var front5 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*4)),radians(addToCandD),twist,'front');
//var front6 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*5)),radians(addToCandD),twist,'front');
//var front7 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*6)),radians(addToCandD),twist,'front');
//var finish = front1+front2+front3+front4+front5+front6+front7;

//var finish = back1 + back2 + front1 + front2 + extra;

//console.log(finish);


//DANCER


finish = back1 + back2 + dance + front1 + front2 + extra;
console.log(finish)

