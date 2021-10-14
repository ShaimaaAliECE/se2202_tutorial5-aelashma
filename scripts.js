let nextPlayer = 'X'; 
let nextPlayerLabel = document.getElementById('next-lbl');
nextPlayerLabel.innerText = " " + nextPlayer;
createGameBoard()

function createGameBoard() {
    let cells = document.getElementsByTagName('td')
    
    for (let i = 0; i < cells.length; i++) {
        let btn = document.createElement('button')
        btn.innerText = "[ ]"
        cells[i].appendChild(btn)
    }
}

let btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

function takeCell (event) {
    event.target.innerText = "[" + nextPlayer + "]";
    event.target.disabled = true;
    if (nextPlayer == 'X') nextPlayer = 'O';
    else nextPlayer = 'X';
    nextPlayerLabel.innerText = " " + nextPlayer;

    if (isGameOver()) {
        let h1 = document.createElement("h1");
        let txtNode = document.createTextNode("Game Over!")
        h1.appendChild(txtNode);
        let gameOverLabel = document.getElementById('game-over-lbl');
        gameOverLabel.appendChild(h1);
    }
}

function isGameOver() {
    let disabled = 0;
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].disabled) {
            disabled++;
        }
    }
    if (disabled == 9) {
        return true;
    }
    return false;
}
