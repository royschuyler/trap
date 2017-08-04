function tNumbers (d,start,use){
  var arr = [];
  for(i=0; i<=d;i++){
    arr.push(start-(use*i))
  } return arr
}

function basePoints(d,start,a,s,cy){
  var radUse = radians(360)/d;
  var e = 1/a;
  var small = [1,2,3,4];
  var obj = {
    p: [],
    x: [],
    y: [],
    dif: [],
    use: [],
    m: [],
    b: []
  }
  for(i=0;i<small.length;i++){
    obj.p.push(radians(start)+(radUse*((d/4)*small[i])));
    obj.x.push(s*sin(obj.p[i]));
    obj.y.push(((cos(obj.p[i])*e)+cy)*s);
  }
  for(i=0;i<small.length;i++){
    if(i<3){
      obj.dif.push(obj.x[i+1]-obj.x[i]);
      obj.m.push((obj.y[i+1]-obj.y[i])/(obj.x[i+1]-obj.x[i]));
    }else{
      obj.dif.push(obj.x[0]-obj.x[i]);
      obj.m.push((obj.y[0]-obj.y[i])/(obj.x[0]-obj.x[i]));
    }
      obj.use.push(obj.dif[i]/d);
      obj.b.push(obj.y[i]-(obj.m[i]*obj.x[i]));
  }return obj
}

function basePointsV(d,obj1,obj2){
  var small = [1,2,3,4];
  var obj = {
    p: obj1.p,
    x: obj1.x,
    y: obj1.y,
    dif: [],
    use: [],
    m: [],
    b: []
  }
  for(i=0;i<small.length;i++){
    obj.dif.push(obj2.x[i]-obj1.x[i]);
    obj.use.push(obj.dif[i]/d);
    obj.m.push((obj2.y[i]-obj1.y[i])/(obj2.x[i]-obj1.x[i]));
    obj.b.push(obj.y[i]-(obj.m[i]*obj.x[i]))
  } return obj
}

function points(objIn,d,start,tPeak,t,yLength,yLength1){
  var arr = numbers (0, d, 1);
  var obj = {
    x1: [],
    y1: [],
    x2: [],
    y2: [],
    x3: [],
    y3: [],
    x4: [],
    y4: []
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[0] + (objIn.use[0]*arr[j]);
   var y = objIn.b[0] + (objIn.m[0]*x);
   obj.x1.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y1.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[1] + (objIn.use[1]*arr[j]);
   var y = objIn.b[1] + (objIn.m[1]*x);
   obj.x2.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y2.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[2] + (objIn.use[2]*arr[j]);
   var y = objIn.b[2] + (objIn.m[2]*x);
   obj.x3.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y3.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[3] + (objIn.use[3]*arr[j]);
   var y = objIn.b[3] + (objIn.m[3]*x);
   obj.x4.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y4.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  return obj
}



