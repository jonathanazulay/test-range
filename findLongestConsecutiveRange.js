const rangeContainsNumber = (num) => (arr, range) => {
  if (range[1] <= 1) { return arr[range[0]] === num }
  let [firstNumber, lastNumber] = [arr[range[0]], arr[range[0] + range[1] - 1]]

  const incrementor = firstNumber - arr[range[0] + 1]
  const direction = lastNumber > firstNumber ? 1 : -1
  if (direction === -1) { [firstNumber, lastNumber] = [lastNumber, firstNumber] }

  return !!(
    num >= firstNumber &&
    num <= lastNumber &&
    ((num - firstNumber) % incrementor === 0)
  )
}

function findLongestConsecutiveRange (arr, incrementor = 1, rangeFilter = function (arr, range) { return true }) {
  let currentRange = [-1, 0] 
  let currentLongestRange = currentRange
  let direction = 0
  let idx = 0
  while(idx < arr.length) {
    const previousNumber = arr[idx - 1]
    const currentNumber = arr[idx]

    if (Math.abs(previousNumber - currentNumber) === Math.abs(incrementor)) {
      const newDirection = currentNumber > previousNumber ? 1 : -1
      if (newDirection === direction) {
        // Same direction, add 1 to length
        currentRange = [currentRange[0], currentRange[1] + 1]
      } else {
        // Since we changed direction, this forms a new range with the previous number => length = 2
        currentRange = [idx - 1, 2]
      }
      direction = newDirection
    } else {
      // Previous number was not in a range with this number, create a new range at this index
      currentRange = [idx, 1]
      direction = 0
    }
    
    currentLongestRange = currentRange[1] > currentLongestRange[1] && rangeFilter(arr, currentRange)
      ? currentRange
      : currentLongestRange
    
    idx += 1
  }
  return currentLongestRange
}

module.exports.findLongestConsecutiveRange = findLongestConsecutiveRange