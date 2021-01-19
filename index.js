// Your code here
function mapToNegativize(sourceArray) {
  let results = []
  for (let element of sourceArray) {
    results.push(element * -1)
  }
  return results
}

function mapToNoChange (sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  let results = []
  for (let element of sourceArray) {
    results.push(element * 2)
  }
  return results
}

function mapToSquare(sourceArray) {
  let results = []
  for (let element of sourceArray) {
    results.push(element ** 2)
  }
  return results
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i <sourceArray.length; i++) {
    total = total +sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i<sourceArray.length; i++) {
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) return true
  }
  return false
}