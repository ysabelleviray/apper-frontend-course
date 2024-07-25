function isPalindrome(word) {
  return word === word.split('').reverse().join('')
}

const word = 'racecar'
if (isPalindrome(word)) {
  console.log('It is a palindrome!')
} else {
  console.log('It is not a palindrome!')
}