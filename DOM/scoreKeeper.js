const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');
const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playto');

let p1score=0;
let p2score=0;
let winningScore=3;
let isGameOver=false;

p1button.addEventListener('click',function(){
    if(!isGameOver){
        p1score++;
        if(p1score==winningScore){
            isGameOver=true;
            p1display.classList.toggle('has-text-success');
            p2display.classList.toggle('has-text-danger');
            p1button.disabled=true;
            p2button.disabled=true;
        }
        p1display.textContent=p1score; // innerText also works
    }
})

p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2score++;
        if(p2score==winningScore){
            isGameOver=true;
            p2display.classList.toggle('has-text-success');
            p1display.classList.toggle('has-text-danger');
            p1button.disabled=true;
            p2button.disabled=true;
        }
        p2display.textContent=p2score;
    }
})

resetButton.addEventListener('click',reset);

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})

function reset(){
    isGameOver=false;
    p1score=0;
    p2score=0;
    p1display.innerText=0;
    p2display.textContent=0;
    p1display.classList.remove('has-text-success','has-text-danger');
    p2display.classList.remove('has-text-success','has-text-danger');
    p1button.disabled=false; // .disabled only works with bulma
    p2button.disabled=false;
}

// REFACTORED CODE:

// const p1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display')
// }
// const p2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display')
// }

// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');
// let winningScore = 3;
// let isGameOver = false;

// function updateScores(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;
//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success');
//             opponent.display.classList.add('has-text-danger');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//         }
//         player.display.textContent = player.score;
//     }
// }


// p1.button.addEventListener('click', function () {
//     updateScores(p1, p2)
// })
// p2.button.addEventListener('click', function () {
//     updateScores(p2, p1)
// })


// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     for (let p of [p1, p2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
// }