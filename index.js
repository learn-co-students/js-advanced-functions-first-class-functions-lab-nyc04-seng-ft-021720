// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2);
};

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
  return function(y) {
    return n * y;
  };
}

const fareDoubler = function(n) {
  return createFareMultiplier(n)(2);
}

const fareTripler = function(n) {
  return createFareMultiplier(n)(3);
}

const selectDifferentDrivers = function(array, innerFunction) {
  return innerFunction(array);
}