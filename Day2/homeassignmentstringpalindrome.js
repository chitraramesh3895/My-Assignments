function reverseString(str) {
    let characters = str.split("");
    let reversed = "";
    for (let i = characters.length - 1; i >= 0; i--) {
        reversed = reversed + characters[i];
    }
    console.log(reversed);
    return reversed;
}
function isPalindrome(str) {
    let reversed = reverseString(str);
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("madam"));