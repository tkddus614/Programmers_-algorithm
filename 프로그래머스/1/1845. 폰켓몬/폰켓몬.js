function solution(nums) {
    const num = nums.length / 2
    const arr = new Set(nums)
    return [...arr].length > num ? num : [...arr].length
}