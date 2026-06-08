function processConfirm(answer) {
    let result;

    if (answer === true) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }

    return result;
}

let userChoice = confirm("Do you want to play chess?"); 
let finalResult = processConfirm(userChoice); 

alert(finalResult); 
console.log(finalResult);