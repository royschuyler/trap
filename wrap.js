var finalCount = 0;

function makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart,aToCAdd,twist,side,bigSide){
  var text = '';
  var buffer = '';
  var ringText = '';

  var obj = {
    a: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: []
    },
    b: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: [],
    },
    c: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: [],
    },
    d: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: [],
    }
  }

  //*********************DERIVED*********************
  var e = 1/a;
  var aAndBStart = baseRingStart + ringStart;
  var cAndDStart = aAndBStart + aToCAdd;
  var conicE = sqrt((a*a)-1)/a;
  var radUse = radians(180)/d;
  var numbersArr = numbers(0,d,1);
  var radUseArr = numbers(0,d,radUse);
  var oneMinusCos = fancyNumbers(radUseArr,f1);
  var pathNum = arrMultiply(oneMinusCos,d/2);
  var pathRad = arrMultiply(pathNum,radUse);
  var pathx = arrSin(pathRad);
  var pathy = arrCos(pathRad,conicE);
  var ww1 = fancyww1(radUseArr,f2,n);
  var ww2 = fancyww2(ww1);
  var wrapRadArr = wrapRad(ww2);

  //MAKING WRAPS
  var wrapAx = wrapXFun(wrapRadArr,aAndBStart,pathx,1);
  var wrapAy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,1);
  var wrapBx = wrapXFun(wrapRadArr,ringStart,pathx,bAndDSize);
  var wrapBy = wrapYFun(pathx,e,wrapRadArr,ringStart,pathy,bAndDSize);
  var wrapCx = wrapXFun(wrapRadArr,cAndDStart,pathx,1);
  var wrapCy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,1);
  var wrapDx = wrapXFun(wrapRadArr,cAndDStart,pathx,bAndDSize);
  var wrapDy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,bAndDSize);

  //PUTING WRAPS IN OBJ
  obj.a.x = wrapAx;
  obj.b.x = wrapBx;
  obj.c.x = wrapCx;
  obj.d.x = wrapDx;
  obj.a.y = wrapAy;
  obj.b.y = wrapBy;
  obj.c.y = wrapCy;
  obj.d.y = wrapDy;

  obj.a.x.reverse();
  obj.b.x.reverse();
  obj.c.x.reverse();
  obj.d.x.reverse();
  obj.a.y.reverse();
  obj.b.y.reverse();
  obj.c.y.reverse();
  obj.d.y.reverse();

  obj.a.frontCount = getFront(obj.a.x,obj.a.y,.99).frontCount;
  obj.a.backCount = getFront(obj.a.x,obj.a.y,.99).backCount;
  obj.b.frontCount = getFront(obj.b.x,obj.b.y,.99*bAndDSize).frontCount;
  obj.b.backCount = getFront(obj.b.x,obj.b.y,.99*bAndDSize).backCount;
  obj.c.frontCount = getFront(obj.c.x,obj.c.y,.99).frontCount;
  obj.c.backCount = getFront(obj.c.x,obj.c.y,.99).backCount;
  obj.d.frontCount = getFront(obj.d.x,obj.d.y,.99*bAndDSize).frontCount;
  obj.d.backCount = getFront(obj.d.x,obj.d.y,.99*bAndDSize).backCount;

  var equalObj = {
  x1: obj.a.frontCount,
  x2: obj.b.frontCount,
  x3: obj.c.frontCount,
  x4: obj.d.frontCount
  }

  var frontCount = equalOut(equalObj);
  var backCount = d-frontCount;

  obj.a.frontCount = frontCount;
  obj.a.backCount = backCount;
  obj.b.frontCount = frontCount;
  obj.b.backCount = backCount;
  obj.c.frontCount = frontCount;
  obj.c.backCount = backCount;
  obj.d.frontCount = frontCount;
  obj.d.backCount = backCount;

  //SEPARATING FRONT AND BACK IN OBJ
  var separateA = separate(obj.a.x,obj.a.y,obj.a.frontCount,obj.a.backCount);
  var separateB = separate(obj.b.x,obj.b.y,obj.b.frontCount,obj.b.backCount);
  var separateC = separate(obj.c.x,obj.c.y,obj.c.frontCount,obj.b.backCount);
  var separateD = separate(obj.d.x,obj.d.y,obj.c.frontCount,obj.b.backCount);
  obj.a.xFront = separateA.xFront;
  obj.a.xBack = separateA.xBack;
  obj.b.xFront = separateB.xFront;
  obj.b.xBack = separateB.xBack;
  obj.c.xFront = separateC.xFront;
  obj.c.xBack = separateC.xBack;
  obj.d.xFront = separateD.xFront;
  obj.d.xBack = separateD.xBack;

  obj.a.yFront = separateA.yFront;
  obj.a.yBack = separateA.yBack;
  obj.b.yFront = separateB.yFront;
  obj.b.yBack = separateB.yBack;
  obj.c.yFront = separateC.yFront;
  obj.c.yBack = separateC.yBack;
  obj.d.yFront = separateD.yFront;
  obj.d.yBack = separateD.yBack;

  var twistAFront = twistIt(obj.a.xFront,obj.a.yFront,twist);
  var twistBFront = twistIt(obj.b.xFront,obj.b.yFront,twist);
  var twistCFront = twistIt(obj.c.xFront,obj.c.yFront,twist);
  var twistDFront = twistIt(obj.d.xFront,obj.d.yFront,twist);

  var twistABack = twistIt(obj.a.xBack,obj.a.yBack,twist);
  var twistBBack = twistIt(obj.b.xBack,obj.b.yBack,twist);
  var twistCBack = twistIt(obj.c.xBack,obj.c.yBack,twist);
  var twistDBack = twistIt(obj.d.xBack,obj.d.yBack,twist);
  //console.log(twist)

  var finalObj = {
    a: {
      back: {
        x: [],
        y: []
      },
      front: {
        x: [],
        y: []
      }
    },
    b: {
      back: {
        x: [],
        y: []
      },
      front: {
        x: [],
        y: []
      }
    },
    c: {
      back: {
        x: [],
        y: []
      },
      front: {
        x: [],
        y: []
      }
    },
    d: {
      back: {
        x: [],
        y: []
      },
      front: {
        x: [],
        y: []
      }
    }
  }

  finalObj.a.back.x = twistABack.x;
  finalObj.a.back.y = twistABack.y;
  finalObj.a.front.x = twistAFront.x;
  finalObj.a.front.y = twistAFront.y;

  finalObj.b.back.x = twistBBack.x;
  finalObj.b.back.y = twistBBack.y;
  finalObj.b.front.x = twistBFront.x;
  finalObj.b.front.y = twistBFront.y;

  finalObj.c.back.x = twistCBack.x;
  finalObj.c.back.y = twistCBack.y;
  finalObj.c.front.x = twistCFront.x;
  finalObj.c.front.y = twistCFront.y;

  finalObj.d.back.x = twistDBack.x;
  finalObj.d.back.y = twistDBack.y;
  finalObj.d.front.x = twistDFront.x;
  finalObj.d.front.y = twistDFront.y;

  //*************PLOT STUFF************************************
  var mainBack = obj.a.backCount;
  var mainFront = obj.a.frontCount;
  var frontUse = 1/(mainFront/2);
  var backUse = 1/(mainBack/2);

  function plot(x1,y1,x2,y2,x3,y3,x4,y4){
     //1 = white
     //0 = black
    var scale = 1;
    var use = 1/(x1.length/2);
    var k = 0;
    var m = 0;

    for(i=0;i<x1.length;i++){
      if(k<mainFront/2){
        var put = frontUse * m;
        m++
        //end should be 1
      }
      if(k>=mainFront/2 && k<=mainFront){
        var put = frontUse * m;
        m--
        //end should be 0
      }
      if(k>mainFront && k<=mainFront+(mainBack/2)){
        var put = backUse * m;
        m++
        //end should be 1
      }
      if(k>mainFront+(mainBack/2) && k<=mainFront+mainBack){
        var put = backUse * m;
        m--
        //end should be 0
      }
      var put = .9;

      buffer += 'newbuffer' + '\n';
      buffer += 'newbuffer' + '\n';
      buffer += 'newbuffer' + '\n';
      buffer += 'newbuffer' + '\n';
      buffer += 'newbuffer' + '\n';
      //a to c
      text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
      text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
      text += 'bcolor ' + (put)*.4 + ' ' + (put)*.5 + ' ' + (put)*.3 + ' ' + finalCount + '\n'
      finalCount++
      //c to d
      text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
      text += 'addvalue ' + finalCount + ' ' + x3[i] + ' ' + y3[i] + '\n';
      text += 'bcolor ' + (put) + ' ' + (put) + ' ' + (put) + ' ' + finalCount + '\n'
      finalCount++
     //d to b
      text += 'addvalue ' + finalCount + ' ' + x3[i] + ' ' + y3[i] + '\n';
      text += 'addvalue ' + finalCount + ' ' + x4[i] + ' ' + y4[i] + '\n';
      text += 'bcolor ' + (put) + ' ' + (put) + ' ' + (put) + ' ' + finalCount + '\n'
      finalCount++
     //b to a
      text += 'addvalue ' + finalCount + ' ' + x4[i] + ' ' + y4[i] + '\n';
      text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
      text += 'bcolor ' + (put)*.9 + ' ' + (put)*.8 + ' ' + (put)*.7 + ' ' + finalCount + '\n'

      k++
      finalCount++
     }
    }

    if(side == 'front'){
      plot(finalObj.a.back.x,finalObj.a.back.y,finalObj.c.back.x,finalObj.c.back.y,finalObj.d.back.x,finalObj.d.back.y,finalObj.b.back.x,finalObj.b.back.y);
    }else{
      plot(finalObj.a.front.x,finalObj.a.front.y,finalObj.c.front.x,finalObj.c.front.y,finalObj.d.front.x,finalObj.d.front.y,finalObj.b.front.x,finalObj.b.front.y);
    }

  var end = buffer + text;
  return end
}






