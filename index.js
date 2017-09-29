const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, name]
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function prependKitten(name) {
  return [name, ...kittens]
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function removeLastKitten() {
  return kittens.slice(0,-1)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
