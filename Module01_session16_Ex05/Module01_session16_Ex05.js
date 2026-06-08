function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let userInput = prompt("Mời bạn nhập vào một chuỗi ký tự:");

if (isPalindrome(userInput)) {
    alert(`Chuỗi "${userInput}" là chuỗi đối xứng.`);
} else {
    alert(`Chuỗi "${userInput}" không phải là chuỗi đối xứng.`);
}