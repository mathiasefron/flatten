
function flatten (arr) {
  if (!Array.isArray(arr)) return arr
  if (!arr.length) return arr

  const first = arr.shift()
  const isArray = Array.isArray(first)

  if (!isArray && arr.length) return [first, ...flatten(arr)]
  if (!isArray && !arr.length) return [first]
  if (isArray && first.length && arr.length) return [...flatten(first), ...flatten(arr)]
  if (isArray && first.length && !arr.length) return [...flatten(first)]
  if (isArray && !first.length && arr.length) return [...flatten(arr)]
  if (isArray && !first.length && !arr.length) return []
}

console.log(flatten())
console.log(flatten(null))
console.log(flatten(3))
console.log(flatten([]))
console.log(flatten([1, [2, [3, 4, [5, 6], 7], 8], [], [[[[]]]], [[9, [10, [[11, 12]]]], 13], 14]))
