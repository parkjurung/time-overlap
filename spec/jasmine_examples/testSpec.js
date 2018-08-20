var timeOverlap = require('../../index');
var cross = timeOverlap.cross;
var integrate = timeOverlap.integrate;
var crossAll = timeOverlap.crossAll;
var sum = timeOverlap.sum;
var sumAll = timeOverlap.sumAll;
var case0 = [2];
var case0_answer = [];
var case1_a = [2, 3, 4, 6, 7, 11, 12, 13, 14, 15, 16, 17, 19];
var case1_b = [3, 4, 5, 8, 9, 10, 15, 18];
var case1_answer = [3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 15, 15, 16, 17];
var case1_sum_answer = [2, 3, 3, 4, 4, 11, 12, 13, 14, 15, 15, 18, 19];
var case2_a = [1, 2, 3, 4, 5, 6, 7, 8];
var case2_b = [1.5, 3.5];
var case2_answer = [1.5, 2, 3, 3.5];
var case2_sum_answer = [1, 4, 5, 6, 7, 8];
var case3_a = [1, 4, 5, 8, 9, 12];
var case3_b = [2, 6, 7, 11];
var case3_c = [3, 8, 10];
var case3_answer = [3, 4, 5, 6, 7, 8, 10, 11];
var case3_sum_answer = [1];
var case3_1 = [2];
var case3_1_answer = [];
var case3_2_a = [2,3];
var case3_2_b = [];
var case3_2_answer = [];
var case4_a = [1, 3, 4, 6, 8];
var case4_b = [3, 4, 5, 9];
var case4_answer = [1, 3, 3, 4, 4];

describe("cross", function () {
  it('case0 should return case0_answer', function () {
    expect(cross(case0)).toEqual(case0_answer);
  });
  it('case1 should return case1_answer', function () {
    expect(cross(case1_a, case1_b)).toEqual(case1_answer);
  });
  it('case2 should return case2_answer', function () {
    expect(cross(case2_a, case2_b)).toEqual(case2_answer);
  });
  it('should be commutative', function () {
    expect(cross(case1_a, case1_b)).toEqual(cross(case1_b, case1_a));
    expect(cross(case2_a, case2_b)).toEqual(cross(case2_b, case2_a));
  });
});
describe("crossAll", function () {
  it('case3 should return case3_answer', function () {
    expect(crossAll(case3_a, case3_b, case3_c)).toEqual(case3_answer);
  });
  it('case3_1 should return case3_1_answer', function(){
    expect(crossAll(case3_1)).toEqual(case3_1_answer);
  });
  it('case3_2 should return case3_2_answer', function(){
    expect(crossAll(case3_2_a, case3_2_b)).toEqual(case3_2_answer);
  });
  it('should be commutative', function () {
    expect(crossAll(case3_c, case3_b, case3_a)).toEqual(case3_answer);
    expect(crossAll(case3_a, case3_c, case3_b)).toEqual(case3_answer);
    expect(crossAll(case3_c, case3_a, case3_b)).toEqual(case3_answer);
    expect(crossAll(case3_b, case3_a, case3_c)).toEqual(case3_answer);
    expect(crossAll(case3_b, case3_c, case3_a)).toEqual(case3_answer);
  });
});
describe("sum", function () {
  it('cases should return proper answer', function () {
    expect(sum(case1_a, case1_b)).toEqual(case1_sum_answer);
    expect(sum(case2_a, case2_b)).toEqual(case2_sum_answer);
    expect(sum(case1_a, case1_a)).toEqual(case1_a);
    expect(sum(case1_b, case1_b)).toEqual(case1_b);
    expect(sum(case2_a, case2_a)).toEqual(case2_a);
    expect(sum(case4_a, case4_b)).toEqual(case4_answer);
  });
  it('should be commutative', function () {
    expect(sum(case1_a, case1_b)).toEqual(sum(case1_b, case1_a));
    expect(sum(case2_a, case2_b)).toEqual(sum(case2_b, case2_a));
  });
});
describe("sumAll", function () {
  it('cases should return proper answer', function () {
    expect(sumAll(case3_a, case3_b, case3_c)).toEqual(case3_sum_answer);
  });
  it('should be commutative', function () {
    expect(sumAll(case3_a, case3_c, case3_b)).toEqual(case3_sum_answer);
    expect(sumAll(case3_b, case3_a, case3_c)).toEqual(case3_sum_answer);
    expect(sumAll(case3_b, case3_c, case3_a)).toEqual(case3_sum_answer);
    expect(sumAll(case3_c, case3_a, case3_b)).toEqual(case3_sum_answer);
    expect(sumAll(case3_c, case3_b, case3_a)).toEqual(case3_sum_answer);
  });
});
describe("integrate", function () {
  it('case1_a should be null', function () {
    expect(integrate(case1_a)).toBeNull();
  });
  it('case1_b should return the right value', function () {
    expect(integrate(case1_b)).toEqual(8);
  });
  it('case1_answer should be the right value', function () {
    expect(integrate(case1_answer)).toEqual(4);
  });
});