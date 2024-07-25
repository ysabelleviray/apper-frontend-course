function convertToVowels(word) {
  return word.toLowerCase().split('').filter(v => 'aeiou'.includes(v)).join('')
}

const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo