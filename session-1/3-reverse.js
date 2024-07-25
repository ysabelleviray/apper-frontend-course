function reverse(word) {
    let reversed = ''
    for (let index = word.length - 1; index >= 0; index--) {
      reversed += word[index]
    }
    return reversed
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'