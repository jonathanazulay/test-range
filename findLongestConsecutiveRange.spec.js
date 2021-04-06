const { expect, describe, it } = require("@jest/globals")
const { findLongestConsecutiveRange, walkRange } = require('./findLongestConsecutiveRangeNEW')

describe('findLongestConsecutiveRange', () => {
  it ('handles empty array', () => {
    expect(findLongestConsecutiveRange([])).toEqual([-1, 0])
  })

  it ('handles array with 1 item', () => {
    expect(findLongestConsecutiveRange([2])).toEqual([0, 1])
    expect(findLongestConsecutiveRange([3])).toEqual([0, 1])
  })

  it ('finds consecutive range', () => {
    expect(findLongestConsecutiveRange([0, 1, 2, 3, 4])).toEqual([0, 5])
  })

  it ('finds longest consecutive range', () => {
    expect(findLongestConsecutiveRange([2, 3, 1, 2, 2, 6, 7, 8, 9, 1, 3])).toEqual([5, 4])
    expect(findLongestConsecutiveRange([3, 5, 6, 0, 0, 4, 2, 3])).toEqual([1, 2])
  })

  it ('handles mixed ranges increasing/decreasing', () => {
    expect(findLongestConsecutiveRange([3, 1, 2, 3, 5, 0, 4, 3, 2, 1])).toEqual([6, 4])
    expect(findLongestConsecutiveRange([3, 1, 2, 3, 4, 5, 5, 0, 4, 3, 2, 1])).toEqual([1, 5])
    expect(findLongestConsecutiveRange([20, 10, 33, 33, 32, 31, 30, 29, 1, 1, 3, 4, 5, 4, 3, 2, 1])).toEqual([3, 5])
  })

  it ('handles ranges containing number at same index', () => {
    expect(findLongestConsecutiveRange([0, 3, 2, 1, 2, 3, 4])).toEqual([3, 4])
    expect(findLongestConsecutiveRange([0, 3, 2, 1, 2, 3])).toEqual([1, 3])
    expect(findLongestConsecutiveRange([0, 3, 2, 1, 2, 3, 4, 5])).toEqual([3, 5])
    expect(findLongestConsecutiveRange([0, 5, 4, 3, 2, 1, 2, 3, 4, 5])).toEqual([1, 5])
    expect(findLongestConsecutiveRange([0, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5])).toEqual([1, 6])
    expect(findLongestConsecutiveRange([0, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6])).toEqual([5, 6])
  })

  it ('handles different incrementors', () => {
    expect(findLongestConsecutiveRange([0, 6, 4, 2, 4, 6, 8], 2)).toEqual([3, 4])
    expect(findLongestConsecutiveRange([0, 6, 4, 2, 4, 6, 8], -2)).toEqual([3, 4])
    expect(findLongestConsecutiveRange([20, 10, 33, 33, 32, 31, 30, 29, 1, 1, 3, 4, 5, 4, 3, 2, 1].map(n => n * 3), 3)).toEqual([3, 5])
    expect(findLongestConsecutiveRange([20, 10, 33, 33, 32, 31, 30, 29, 1, 1, 3, 4, 5, 4, 3, 2, 1].map(n => n * -3), 3)).toEqual([3, 5])
    expect(findLongestConsecutiveRange([3], 1000)).toEqual([0, 1])
  })
})
