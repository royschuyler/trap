

function danceLook(d,tPeak,start,start2,t1,t2,t3,t4,f,v,size){

function makeDancer(d,tPeak,start,start2,t1,t2,t3,t4,f,v,size){
  var rad90Use = radians(90)/d;
  var gap = t1-t4;
  var topDif = t1-t2;
  var btmDif = t3-t4;
  var topRate = topDif/gap;
  var btmRate = btmDif/gap;
  var bPeak = tPeak*btmRate;
  var topUse = (tPeak*topRate)/d;
  var btmUse = (tPeak*btmRate)/d;
  var topTarr =  tNumbers(d,tPeak,topUse);
  var btmTarr = tNumbers(d,bPeak,btmUse);
  var f1 = f;
  var v1 = v;
  var vm1 = cot(radians(v1));
  var fm1 = cot(radians(90)-t1);
  var fb1 = tan(t1)*abs(f1);
  var ix1 = (fb1-v1)/(vm1-fm1);
  var iy1 = vm1*((fb1-v1)/(vm1-fm1))+ v1;
  var y1 = (tan(t1)*f1)-iy1;
  var yLength1 = (tan(t1)*f1);
  document.write("yL1: " + yLength1);
  var a1;
  if(t1>0){
    a1 = abs(ix1/y1);
  }else{
    a1 = abs(ix1/y1) * -1;
  }
  var s1 = abs(ix1);
  var cy1 = iy1;
  var f2 = f;
  var v2 = v;
  var vm2 = cot(radians(v2));
  var fm2 = cot(radians(90)-t2);
  var fb2 = tan(t2)*abs(f2);
  var ix2 = (fb2-v2)/(vm2-fm2);
  var iy2 = vm2*((fb2-v2)/(vm2-fm2))+ v2;
  var y2 = (tan(t2)*f2)-iy2;
  var a2;
  if(t2>0){
    a2 = abs(ix2/y2);
  }else{
    a2 = abs(ix2/y2) * -1;
  }
  var s2 = abs(ix2);
  var cy2 = iy2;
  var f3 = f;
  var v3 = v;
  var vm3 = cot(radians(v3));
  var fm3 = cot(radians(90)-t3);
  var fb3 = tan(t3)*abs(f3);
  var ix3 = (fb3-v3)/(vm3-fm3);
  var iy3 = vm3*((fb3-v3)/(vm3-fm3))+ v3;
  var y3 = (tan(t3)*f3)-iy3;
  var a3;
  if(t3>0){
    a3 = abs(ix3/y3);
  }else{
    a3 = abs(ix3/y3) * -1;
  }
  var s3 = abs(ix3);
  var cy3 = iy3;
  var f4 = f;
  var v4 = v;
  var vm4 = cot(radians(v4));
  var fm4 = cot(radians(90)-t4);
  var fb4 = tan(t4)*abs(f4);
  var ix4 = (fb4-v4)/(vm4-fm4);
  var iy4 = vm4*((fb4-v4)/(vm4-fm4))+ v4;
  var y4 = (tan(t4)*f4)-iy4;
  var yLength4 = (tan(t4)*f4);
  document.write("yL4: " + yLength4);
  var yLength = (yLength1-yLength4)/2;
  document.write("yLength: " + yLength);
  var a4;
  if(t4>0){
    a4 = abs(ix4/y4);
  }else{
    a4 = abs(ix4/y4) * -1;
  }
  var s4 = abs(ix4);
  var cy4 = iy4;
  var radUse = radians(360)/d;
  var realUse = radUse/4;
  var e2 = 1/a2;
  var e1 = 1/a1;
  var e3 = 1/a3;
  var e4 = 1/a4;
  var num = numbers (0, d, 1)
  var obj1 = basePoints(d,start,a1,s1,cy1);
  var obj2 = basePoints(d,start,a2,s2,cy2);
  var objv = basePointsV(d,obj1,obj2);
  var obj3 = basePoints(d,start2,a3,s3,cy3);
  var obj4 = basePoints(d,start2,a4,s4,cy4);
  var objv2 = basePointsV(d,obj3,obj4);

  var obj = {
    big: points(obj1,d,start,tPeak,topTarr,yLength,yLength1),
    small: points(obj2,d,start,tPeak,topTarr,yLength,yLength1),
    vertical: points(objv,d,start,tPeak,topTarr,yLength,yLength1)
  }
  //console.log(obj)
  var obj2 = {
    big: points(obj3,d,start2,tPeak,btmTarr,yLength,yLength1),
    small: points(obj4,d,start2,tPeak,btmTarr,yLength,yLength1),
    vertical: points(objv2,d,start2,tPeak,btmTarr,yLength,yLength1)
  }

  var buffer = 'newbuffer' + '\n';
  var text = '';

  var minus = size*(yLength1-yLength);
  document.write(minus);
  function plot(side,x1,y1,x2,y2,size,minus){

     //1 = white
     //0 = black
     var color;
     if(side == 1){
       color = .2;
     }
     if(side == 2){
       color = .4;
     }
     if(side == 3){
       color = .6;
     }
     if(side == 4){
       color = .8;
     }
     if(side == 5){
       color = 0;
     }

     for(i=0;i<x1.length;i++){

        buffer += 'newbuffer' + '\n';
        text += 'addvalue ' + finalCount + ' ' + x1[i]*size + ' ' + (y1[i]*size-minus)+ '\n';
        text += 'addvalue ' + finalCount + ' ' + x2[i]*size + ' ' + (y2[i]*size-minus) + '\n';
        text += 'bcolor ' + color + ' ' + color + ' ' + .5 + ' ' + finalCount + '\n'

        finalCount++
     }
  }

  if(t1>=0 && t2>=0){
    if(start>=315 || start<45){
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      // //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      // //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
    if(start>=45 && start<135){
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
    if(start>=135 && start<225){
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
    if(start>=225 && start<315){
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
  }

  if(t1<=0 && t2<=0){
    if(start>=315 || start<45){
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start>=45 && start<135){
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start>=135 && start<225){
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start>=225 && start<315){
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
  }

  if(t1>=0 && t2<=0){
    if(start>=315 || start<45){
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
    }
    if(start>=45 && start<135){
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
    }
    if(start>=135 && start<225){
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
    }
    if(start>=225 && start<315){
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
    }
  }


  if(t3>=0 && t4>=0){
    if(start2>=315 || start2<45){
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      // //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      // //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
    if(start2>=45 && start2<135){
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
    if(start2>=135 && start2<225){
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
    if(start2>=225 && start2<315){
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
  }

  if(t3<=0 && t4<=0){
    if(start2>=315 || start2<45){
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start2>=45 && start2<135){
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start2>=135 && start2<225){
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start2>=225 && start2<315){
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
  }

  if(t3>=0 && t4<=0){
    if(start2>=315 || start2<45){
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
    }
    if(start2>=45 && start2<135){
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
    }
    if(start2>=135 && start2<225){
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
    }
    if(start2>=225 && start2<315){
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
    }
  }

  var end = buffer + text;
  ////console.log(end)
  return end
}



var dance = makeDancer(d,tPeak,start,start2,t1,t2,t3,t4,f,v,size);
return dance
}







