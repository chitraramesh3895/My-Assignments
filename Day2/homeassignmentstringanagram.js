/* function lastWordLength(s) {
    let words = s.split(" ");
    let lastWord = words[words.length - 1];
    let result = lastWord.length;
    return result;
}
console.log(lastWordLength("Hello World")); */

/* function lastWordLength(s) {
    let trimmedString = s.trim();
    let words = trimmedString.split(" ");
    let lastWord = words[words.length - 1];
    let length = lastWord.length;
    return length;
}
console.log(lastWordLength(" fly me to the moon ")); */

function isAnagram(str1, str2) {
    let first = str1.replaceAll(" ", "").toLowerCase();
    let second = str2.replaceAll(" ", "").toLowerCase();
    let sortedFirst = first.split("").sort().join("");
    let sortedSecond = second.split("").sort().join("");
    return sortedFirst === sortedSecond;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));