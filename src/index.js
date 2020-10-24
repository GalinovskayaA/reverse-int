module.exports = function reverse (n) {
  let y = n.toString().split('').reverse().join('')
  return parseInt(y)
}
