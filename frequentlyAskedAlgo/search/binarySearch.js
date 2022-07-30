// o(log(n)) nums sorted array
// search的条件好像都是 while(l <= r)

let binarySearch = function (nums, target) {
    let l = 0, r = nums.length - 1;
    // if nums contains only one element
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target)
            return mid;
        else if(nums[mid] < target) // target too big
            l = mid + 1;
        else // target too small
            r = mid - 1;
    }
    return -1;
}


let arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170], x = 110;
let arr1 = [10, 20, 30, 40, 60, 110, 120, 130, 170], x1 = 175;
console.log(binarySearch(arr, x));
console.log(binarySearch(arr1, x1));
