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

function burst(burstStart,high1,low1,high2,burstD){
  var arr = [];
  var burstN = burstD/10;
  var dUp = (burstD/2)-burstN;
  var dDown = (burstN/4)*3;
  var dEnd = (burstN/4)*5;
  var burtUse1 = (high1-burstStart)/dUp;
  var restUse1 = (high1-low1)/dDown;
  var burtUse2 = (high2-low1)/dUp;
  var restUse2 = (high2-burstStart)/dEnd;
  for(i=0;i<dUp;i++){
    arr.push(burstStart+(i*burtUse1));
  }
  for(i=0;i<dDown;i++){
    arr.push(high1-(i*restUse1));
  }
  for(i=0;i<dUp;i++){
    arr.push(low1+(i*burtUse2));
  }
  for(i=0;i<dEnd;i++){
    arr.push(high2-(i*restUse2));
  }return arr
}

