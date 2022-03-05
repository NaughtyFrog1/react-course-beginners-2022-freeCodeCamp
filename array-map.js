/*
  Challenge 1:
  Given an array of numbers, return an array of each number, squared

  given:  [1, 2, 3, 4, 5]
  return: [1, 4, 9, 16, 25]
*/

const nums = [1, 2, 3, 4, 5]
const squares = nums.map((num) => num ** 2)

console.log(squares)



/*
  Challenge 2:
  Given an array of strings, return an array where 
  the first letter of each string is capitalized

  given:  ["alice", "bob", "charlie", "danielle"]
  return: ["Alice", "Bob", "Charlie", "Danielle"]
*/

const names = ['alice', 'bob', 'charlie', 'danielle']
const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1))

console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

given:  ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemons = ['Bulbasaur', 'Charmander', 'Squirtle']
const paragraphs = pokemons.map((pokemon) => `<p>${pokemon}</p>`)

console.log(paragraphs)
