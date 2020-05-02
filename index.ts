/**
 * Created by bagjuleong on 2016. 12. 13..
 */
export function cross(a: number[], b: number[]): number[] {
  if(!(a&&b)){
    return [];
  }
  const result = [];
  let a_open = false;
  let b_open = false;
  let a_pointer = -1;
  let b_pointer = -1;
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
export function sum(a: number[], b: number[]): number[] {
    if(!(a&&b)){
        return [];
    }
  const result = [];
  let a_open = false;
  let b_open = false;
  let a_pointer = -1;
  let b_pointer = -1;
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
export function sumAll(inputs: number[][]): number[] {
  let result = [];
  for(let i = 0; i < inputs.length; i++){
    if(i===0){
      result = JSON.parse(JSON.stringify(inputs[i]));
    }else{
      result = sum(result, inputs[i]);
    }
  }
  return result;

}
export function crossAll(inputs: number[][]): number[] {
  let result = [];
  if(inputs.length <= 1) {
    return [];
  }
  for(let i = 0; i<inputs.length;i++){
    if(i===0){
      result = JSON.parse(JSON.stringify(inputs[i]));
    }else{
      result = cross(result,inputs[i]);
    }
  }
  return result;
}

export function integrate(a: number[]): number {
  if (a.length % 2) return null;

  let result = 0;
  for (let i = 0; i < a.length; i += 2) {
    result += a[i + 1] - a[i];
  }
  return result;
}
export function overlap(arrays: number[][]): number[] {
  const crosses = []; // n_C_2
  for (let i = 0; i < arrays.length; i ++) {
    for (let j = i + 1; j < arrays.length; j ++) {
      crosses.push(cross(arrays[i], arrays[j]));
    }
  }
  return sumAll.apply(this, crosses);
}