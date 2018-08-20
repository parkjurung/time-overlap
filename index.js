/**
 * Created by bagjuleong on 2016. 12. 13..
 */
function cross(a, b) {
  if(!(a&&b)){
    return [];
  }
  var result = [];
  var a_open = false;
  var b_open = false;
  var a_pointer = -1;
  var b_pointer = -1;
  while (a_pointer < a.length && b_pointer < b.length) {
    if (a[a_pointer + 1] == b[b_pointer + 1] && b_open) { //for dot intersection
      a_pointer++;
      a_open = !a_open;
      if (b_open && a[a_pointer]) result.push(a[a_pointer]);
    } else if (!b[b_pointer + 1] || a[a_pointer + 1] < b[b_pointer + 1]) {
      a_pointer++;
      a_open = !a_open;
      if (b_open && a[a_pointer]) result.push(a[a_pointer]);
    } else {
      b_pointer++;
      b_open = !b_open;
      if (a_open && b[b_pointer]) result.push(b[b_pointer]);
    }
  }
  return result;
}
function sum(a,b){
    if(!(a&&b)){
        return [];
    }
  var result = [];
  var a_open = false;
  var b_open = false;
  var a_pointer = -1;
  var b_pointer = -1;
  while(a_pointer < a.length && b_pointer < b.length){
    // console.log('in while//','a.length:',a.length,'a_pointer:',a_pointer,'b.length:',b.length,'b_pointer:',b_pointer);
    if (a[a_pointer + 1] == b[b_pointer + 1] && !b_open) { //for dot intersection
      a_pointer++;
      a_open = !a_open;
      if (!b_open) a[a_pointer] && result.push(a[a_pointer]);
    } else if (!b[b_pointer +1] || a[a_pointer + 1] < b[b_pointer + 1]) {
      a_pointer++;
      a_open = !a_open;
      if (!b_open) a[a_pointer] && result.push(a[a_pointer]);
    } else {
      b_pointer++;
      b_open = !b_open;
      if (!a_open) b[b_pointer] && result.push(b[b_pointer]);
    }
  }
  return result;
}
function sumAll(){
  var result = [];
  for(var i = 0; i<arguments.length;i++){
    if(i===0){
      result = JSON.parse(JSON.stringify(arguments[i]));
    }else{
      result = sum(result,arguments[i]);
    }
  }
  return result;

}
function crossAll(){
  var result = [];
  if(arguments.length <= 1) {
    return [];
  }
  for(var i = 0; i<arguments.length;i++){
    if(i===0){
      result = JSON.parse(JSON.stringify(arguments[i]));
    }else{
      result = cross(result,arguments[i]);
    }
  }
  return result;
}

function integrate(a) {
  if (a.length % 2) return null;

  var result = 0;
  for (var i = 0; i < a.length; i += 2) {
    result += a[i + 1] - a[i];
  }
  return result;
}
exports.cross = cross;
exports.crossAll = crossAll;
exports.sum = sum;
exports.sumAll = sumAll;
exports.integrate = integrate;



