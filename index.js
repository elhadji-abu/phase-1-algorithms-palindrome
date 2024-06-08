function isPalindrome(word) {
    word = word.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - i - 1]) {
        return false;
      }
    }
  
    return true;
  }
  
  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;