function isEven(number) {
    return number % 2 === 0;
}

let userInput = parseInt(prompt("Mời bạn nhập vào một số nguyên bất kỳ:"));
let result = isEven(userInput);

alert("Kết quả kiểm tra số chẵn: " + result);
