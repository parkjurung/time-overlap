/**
 * Created by bagjuleong on 2016. 12. 15..
 */
function test(){
  console.log(arguments.constructor);
  console.log(arguments);
  console.log(arguments.length);
}

test([1],[1,2,3],[1,2,3,4],[1,2,3,4,5,6]);