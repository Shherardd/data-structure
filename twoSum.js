/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let number = null
    let map = new Map()
    
    nums.map((val, i)=>{
        map.set(val, i)
    })

    nums.map((val, i)=>{
        let complement = target - nums[i]
        if(map.has(complement) && map.get(complement) != i ){
            let arr = [map.get(complement), i]
            number = arr
        }
    })
    
    return number
};

console.log(twoSum([2, 7, 11, 15], 9))