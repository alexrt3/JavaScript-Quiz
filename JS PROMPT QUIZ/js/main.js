var score = 0;
if(prompt("Favorite programming language?") == "python"){
    score += 1;
}
if(prompt("Least favorite programming language?") == "javascript"){
    score += 1;
}
if(prompt("Is it fun shoveling snow?") == "no"){
    score += 1;
}
if(prompt("Who's the best Coding Temple instructor?") == "derek"){
    score += 1;
}
if(prompt("Who's the best Coding Temple TA") == "nate"){
    score += 1;
}

document.getElementById('result').innerHTML = "Calculating....";
function showAnswer() {
    if(score ==5) {
        alert("Perfect Score Great job!")
        document.getElementById('result').innerHTML = score;
    }
    if(score ==4) {
        alert("Good job!")
        document.getElementById('result').innerHTML = score;
    }
    if(score ==3) {
        alert("Not Bad!")
        document.getElementById('result').innerHTML = score;
    }
    if(score ==2) {
        alert("Study More!")
        document.getElementById('result').innerHTML = score;
    }
    if(score ==1) {
        alert("Study More!")
        document.getElementById('result').innerHTML = score;
    }
    if(score ==0) {
        alert("Study More!")
        document.getElementById('result').innerHTML = score;
    }
}
setTimeout(showAnswer, 2000);