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
      arr.push((topTwist*i)-(360*multiplier))
    }
  }return arr
}

//***********************************************************
// d needs to be even
// heartbeats needs to be even
// (d/heartbeats)/2 needs to be even
function burst(d,heartbeats,high1,low1,high2,low2){

  var arr = [];

  var directionChanges = heartbeats*4;
  var scale = d/directionChanges;
  var upScale = Math.floor(scale * 0.85);
  var downScale = scale+((scale - upScale)*3);
  console.log('scale '+scale)
  console.log('upscale '+upScale)
  console.log('downscale '+downScale)

  for(j=0;j<heartbeats;j++){

    var difUse = (high1-low1)/upScale;
    for(i=0;i<upScale;i++){
      var ready = high1-(difUse*i);
      arr.push(ready);
    }

    var difUse = (high2-low1)/upScale;
    for(i=0;i<upScale;i++){
      var ready = low1+(difUse*i);
      arr.push(ready);
    }

    var difUse = (high2-low2)/upScale;
    for(i=0;i<upScale;i++){
      var ready = high2-(difUse*i);
      arr.push(ready);
    }

    var difUse = (high1-low2)/downScale;
    for(i=0;i<downScale;i++){
      var ready = low2+(difUse*i);
      arr.push(ready);
    }
  }
  return arr
}

function sqrt(x){
  if(isNaN(Math.sqrt(x)) === true){
    return 0;
  }else{
    return Math.sqrt(x)
  }
}

function intersection(e,s,k){
  var obj = {
    x: 0,
    y: 0,
    t1: 0,
    t2: 0,
    allFront: true,
    e: 0,
    s: 0,
    k: 0,
    gap: {
      start: 0,
      end: 0
    }
  }

  obj.y = ((e*sqrt((1-square(e))*square(s)+square(k)+square(e)-1)-k)/(square(e)-1));
  obj.x = sqrt(1-square(obj.y));
  obj.t1 = asin(obj.x/s);
  obj.t2 = asin(-obj.x/s);
  obj.e = e;
  obj.s = s;
  obj.k = k;

  if(isNaN(obj.x) == true || isNaN(obj.y) == true || obj.x == 0 || obj.y == 0){
    obj.allFront = true;
  }else{
    obj.allFront = false;
  }

  if(obj.allFront == false){
      obj.gap.start = obj.t1;
      obj.gap.end = obj.t2;
  }






  return obj
}
