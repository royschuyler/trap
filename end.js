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
//************************************************************************************
var bounces = 1;
var danceBendPeak = 100;
var pathA = 1.6;
var pathSize = .4;
var pathCenteredY = .6;
var danceSpinEach = 40;
var wrapRotations = 1;

var ticker = 7;
var d = 20;
var bounceVar = bounceArr(bounces,d,danceBendPeak);
var path = ellipse(d,pathA,pathSize,pathCenteredY);
var danceSpinArr = regulate(d,danceSpinEach);
var wrapTwistUse = (360/d)*wrapRotations;


//END WORK WRAP
var tilt = atan(path.x[ticker]/path.y[ticker]);
var baseRad = wrapTwistUse * ticker;
var a = 1/path.y[ticker];

//END WORK DANCE
var tPeak = radians(bounceVar[ticker]);
var start = danceSpinArr[ticker];



//OTHER WRAP
var addToStart = 0;
var addToCandD = 15;
var dWrap = 500;
var n = 1.1;
var f1 = 1;
var f2 = 1.1;
var bAndDSize = .85;
var baseAdd = (360/3);

//OTHER DANCE
var dDance = 100;
var start2 = start/2;
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

var dance = danceLook(dDance,tPeak,start,start2,t1,t2,t3,t4,f,v,sized);

var front1 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),tilt,'front','front');
var front2 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*1)),radians(addToCandD),tilt,'front','front');
var front3 =  makeShape(dWrap,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),tilt,'front','front');

finish = back1 + back2 + back3 + dance + front1 + front2 + front3 + extra;
//finish = back1 + back2 + back3 + dance + extra;
console.log(finish)
