// 853. Car Fleet
// There are n cars going to the same destination along a one-lane road. The destination is target miles away.
// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).
// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).
// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.
// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
// Return the number of car fleets that will arrive at the destination.

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
};

let target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3];
let target1 = 10, position1 = [3], speed1 = [3];
let target2 = 100, position2 = [0,2,4], speed2 = [4,2,1];
console.log(carFleet(target, position, speed));
console.log(carFleet(target1, position1, speed1));
console.log(carFleet(target2, position2, speed2));
