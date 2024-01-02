let allBoxes = document.querySelectorAll('.box');
let resultDiv = document.querySelector('#result');
let message = document.getElementById('message');
let playAgain = document.getElementById('button');

let chances = 0;
let hasAnybodyWON = false;
let allPossibility = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
];

let xChances = [];
let oChances = [];

allBoxes.forEach((element) => {
    element.addEventListener('click', clickedFunction);
});

function clickedFunction(e) {
    let index = Number(e.target.id) - 1;

    if (chances % 2 == 0) {
        allBoxes[index].innerHTML = `<p style="color:#FAB201;">X</p>`;
        xChances.push(index + 1);
        chances++;
        result(xChances, 'X');
    } else {
        allBoxes[index].innerHTML = `<p style="color:#FAB201;">O</p>`;
        oChances.push(index + 1);
        chances++;
        result(oChances, 'O');
    }
    allBoxes[index].removeEventListener('click', clickedFunction);
    if (hasAnybodyWON == false && chances == 9) {
        resultDiv.style.visibility = 'visible';
        message.innerText = 'The Game is drawn';
    }
}

function result(chancesArray, player) {
    for (let i = 0; i < 8; i++) {
        let count = 0;
        for (let j = 0; j < 3; j++) {
            if (chancesArray.includes(allPossibility[i][j])) {
                count += 1;
            }
        }
        if (count == 3) {
            hasAnybodyWON = true;
            resultDiv.style.visibility = 'visible';
            message.innerText = player + ' Has Won the MATCH!!';
        }
    }
}

playAgain.addEventListener('click', function () {
    window.location.href = './index.html';
});