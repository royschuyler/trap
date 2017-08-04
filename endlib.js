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

