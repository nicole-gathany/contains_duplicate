// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


var containsDuplicate = function(nums) {
    //array of integers
    //if a number is there more than once, return true
    //if no numbers have any duplicates return
    nums.sort((a, b)=> a-b);
    console.log(nums)
    for(let i=0; i<nums.length; i++){
      if(nums[i]===nums[i+1]){
        return true;
      }
    }
    return false;
};

//[1,2,3,1]
//should return true
// [1,2,3,4] should return false

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));