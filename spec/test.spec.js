var timeOverlap = require('../index');
var cross = timeOverlap.cross;
var integrate = timeOverlap.integrate;
var crossAll = timeOverlap.crossAll;
var case1_a = [2,3,4,6,7,11,12,13,14,15,16,17,19];
var case1_b = [3,4,5,8,9,10,15,18];
var case1_answer = [3,3,4,4,5,6,7,8,9,10,15,15,16,17];
var case2_a = [1,2,3,4,5,6,7,8];
var case2_b = [1.5,3.5];
var case2_answer = [1.5,2,3,3.5];
var case3_a = [1,4,5,8,9,12];
var case3_b = [2,6,7,11];
var case3_c = [3,8,10];
var case3_answer = [3,4,5,6,7,8,10,11];
describe("cross", function () {
  it('case1 should be case1_answer', function () {
    expect(cross(case1_a,case1_b)).toEqual(case1_answer);
  });
  it('case2 should be case2_answer',function(){
    expect(cross(case2_a,case2_b)).toEqual(case2_answer);
  });
  it('should be commutative',function(){
    expect(cross(case1_a,case1_b)).toEqual(cross(case1_b,case1_a));
    expect(cross(case2_a,case2_b)).toEqual(cross(case2_b,case2_a));
  });
});
describe("crossAll", function(){
  it('case3 should be case3_answer',function () {
    expect(crossAll(case3_a,case3_b,case3_c)).toEqual(case3_answer);
  });
  it('should be commutative',function () {
      expect(crossAll(case3_c,case3_b,case3_a)).toEqual(case3_answer);
      expect(crossAll(case3_a,case3_c,case3_b)).toEqual(case3_answer);
      expect(crossAll(case3_c,case3_a,case3_b)).toEqual(case3_answer);
      expect(crossAll(case3_b,case3_a,case3_c)).toEqual(case3_answer);
      expect(crossAll(case3_b,case3_c,case3_a)).toEqual(case3_answer);
    }
  )
});
describe("integrate",function(){
  it('case1_a should be null',function(){
    expect(integrate(case1_a)).toBeNull();
  });
  it('case1_b should be the right value',function(){
    expect(integrate(case1_b)).toEqual(8);
  });
  it('case1_answer should be the right value',function(){
    expect(integrate(case1_answer)).toEqual(4);
  });
});