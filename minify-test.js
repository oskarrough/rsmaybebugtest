function test1(maxAge) {
  return maxAge !== false && typeof maxAge !== 'number'
}

function test2(maxAge) {
  return typeof maxAge === 'boolean' && maxAge !== false && typeof maxAge !== 'number'
}

function test3(maxAge) {
  let isInvalid = maxAge !== false && typeof maxAge !== 'number'
  console.log({isInvalid})
  return isInvalid
}

console.log([test1(false), test2(false), test3(false)])
