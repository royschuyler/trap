function numbers (start, end, n){
  var arr = [];
  for(i = start; i < end; i++){
    arr.push(i*n)
  } return arr
}

function sin (x) {
  return Math.sin(x)
}

function cos (x) {
  return Math.cos(x)
}

function tan (x) {
  return Math.tan(x)
}

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}

function ellipse(d,a,size,yCentered) {
  var e = 1/a;
  var use = radians(360)/d;
  var obj = {
    x: [],
    y: []
  }
  for(i=0;i<=d;i++){
    obj.x.push(sin(i*use)*size);
    obj.y.push((cos(i*use)*size*e)+yCentered);
  }
  return obj
}

function bounceArr(bounce,d,peak){
  var use = ((peak*4)/(d))*bounce;
  var arr = [];

  var length = ((d/2)/bounce);
  console.log(length)

  for(j=0;j<bounce;j++){
    var k=0;
    for(i=0;i<length;i++){
      arr.push(-peak+(k*use));
      k++
    }
    var k=0;
    for(i=0;i<length;i++){
      arr.push(peak-(use*k));
      k++
    }
  }
  arr.push(-peak)
  return arr
}

function regulate(d,topTwist){
  var arr = [];

  for(i=0;i<d;i++){
    if(topTwist*i<=360){
      arr.push(topTwist*i);
    }
    if(topTwist*i>360){
      var multiplier = Math.floor((topTwist*i/360) % 360);
      // console.log('second: ' + topTwist*i);
      // console.log('mtplr: ' + multiplier);
      arr.push((topTwist*i)-(360*multiplier))
    }
  }return arr
}



function moves(d,n,aPath,aSize,danceTPeak,bounce,topTwist){
  var wrapTwistUse = 360/d;
  var use = ((danceTPeak*4)/(d))*bounce;
  var path = ellipse(d,aPath,aSize,0.6);
  var danceTUse = ((danceTPeak*2)/d)*bounce;
  var bounceArrVar = bounceArr(bounce,d,danceTPeak);
  var danceSpinArr = regulate(d,topTwist);

  var obj = {
    wrapTwist: wrapTwistUse * n,
    wrapTilt: atan(path.x[n]/path.y[n]),
    wrapE: path.y[n],
    danceT: bounceArrVar[n],
    topTwist: danceSpinArr[n]
  }
  return obj
}

var n = 15;

var d = 20;
var aPath = 1.6;
var aSize = .4;
var danceTPeak = 100;
var bounce = 1;
var topTwist = 40;

var key = moves(d,n,aPath,aSize,danceTPeak,bounce,topTwist);
console.log(key)

//END WORK
//WRAP
var a = 1/key.wrapE;
var twist = key.wrapTilt;
var baseRad = key.wrapTwist;
//DANCE
var tPeak = radians(key.danceT);
var start = key.topTwist;








var addToStart = 0;
var addToCandD = 5;
var dWrap = 100;
var n = 1.01;
var f1 = 1;
var f2 = 1.1;
var bAndDSize = .95;
var baseAdd = (360/3);

//dance
var dDance = 100;
var start2 = -start/5;
var t1 = radians(12);
var t2 = radians(10);
var t3 = radians(9);
var t4 = radians(-4);
var f = 25;
var v = -8;
var sized = .07;


var back1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),twist,'back','back');
var back2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+baseAdd*1),radians(addToCandD),twist,'back','back');
var back3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),twist,'back','back');
//var back4 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*3)),radians(addToCandD),twist,'back');
//var back5 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*4)),radians(addToCandD),twist,'back');
//var back6 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*5)),radians(addToCandD),twist,'back');
//var back7 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*6)),radians(addToCandD),twist,'back');


var dance = danceLook(dDance,tPeak,start,start2,t1,t2,t3,t4,f,v,sized);

var front1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),twist,'front','front');
var front2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*1)),radians(addToCandD),twist,'front','front');
var front3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),twist,'front','front');
//var front4 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*3)),radians(addToCandD),twist,'front');
//var front5 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*4)),radians(addToCandD),twist,'front');
//var front6 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*5)),radians(addToCandD),twist,'front');
//var front7 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*6)),radians(addToCandD),twist,'front');





finish = back1 + back2 + back3 + dance + front1 + front2 + front3 + extra;
console.log(finish)

