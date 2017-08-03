function numbers (start, end, n){
  var arr = [];
  for(i = start; i < end; i++){
    arr.push(i*n)
  } return arr
}

function fancyNumbers (arr,f){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( 1-Math.pow(cos(arr[i]),f) )
  } return box
}

function fancyww1 (arr,f,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( n*(Math.pow(sin(arr[i]),f)) )
  } return box
}

function fancyww2 (arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    if(radians(1/arr[i]) != Infinity){
    box.push( radians(1/arr[i]) )
    }else{
      box.push( 0 )
    }
  } return box
}

function wrapRad(arr){
  var box1 = [];
  for(i = 0; i < arr.length; i++){
    if(i == 0){
      box1.push(0)
    }else if(i == 1){
      box1.push(arr[i])
    }else{
      box1.push(arr[i]+box1[i-1])
    }
  } return box1
}

function arrMultiply(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( arr[i]*n )
  } return box
}

function arrSin(arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]))
  } return box
}

function arrCos(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(cos(arr[i])*n)
  } return box
}

function wrapXFun(arr,add,multiply,size){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]+add)*multiply[i]*size)
  } return box
}

function wrapYFun(pathx,e,wrapRad,radStart,pathy,size){
  var box = [];
  for(i = 0; i < pathx.length; i++){
    box.push(pathx[i]*e*size*cos(wrapRad[i]+radStart)+pathy[i])
  } return box
}


function getFront (x,y,s){
  var obj = {
    frontCount: 0,
    backCount: 0
  }
  for (i=0;i<x.length;i++){
    if(i+2){
      var hyp1 = Math.hypot(x[i], y[i]);
      var hyp2 = Math.hypot(x[i+1], y[i+1]);
      var hyp3 = Math.hypot(x[i+2], y[i+2]);
      if(hyp1 < hyp2 && hyp2 > hyp3 && hyp2 > s){
        var frontAdd = i+1;
        obj.frontCount = frontAdd;
        obj.backCount = (x.length - obj.frontCount);
      }
    }
  }
  return (obj)
}

function separate(xArr,yArr,frontCount,backcount,bAndDSize){
  var obj = {
    xFront: [],
    yFront: [],
    xBack: [],
    yBack: [],
  }
  for(i=0;i<xArr.length;i++){
    if(i<frontCount){
      obj.xFront.push(xArr[i]);
      obj.yFront.push(yArr[i]);
    }else{
      obj.xBack.push(xArr[i]);
      obj.yBack.push(yArr[i]);
    }
  }
  return obj
}

function equalOut(obj){
  var arr = [obj.x1,obj.x2,obj.x3,obj.x4];
  var count = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  return count
 }

function twistIt(x,y,t){
  var obj = {
    x: x.map(a => a),
    y: y.map(a => a),
  }
  var objOut = {
    x: [],
    y: []
  }
  for(i=0;i<obj.x.length;i++){
    objOut.x.push((obj.x[i]*cos(t)) + (obj.y[i] * sin(t)));
    objOut.y.push((-obj.x[i]*sin(t)) + (obj.y[i] * cos(t)));
  }
  return objOut
}

