const pos = ['a','b','c','d','e','f','g','h'];

const chessBoard = document.querySelector('.chess_board');
const cell = document.querySelector('.cell');
const timer_button = document.querySelector('.start_time'); 
const timer_clock =document.querySelector('.timer_clock');
const wanted_postion = document.querySelector('.pos');
const score_number = document.querySelector('.score');
const pos_appear = document.querySelector('.pos_appear');
const instructions = document.querySelector('.instructions');
let score =0;
let counter=0;
let game_started=false;

function get_random_postion(){
    let randomLetter = pos[Math.floor(Math.random() * pos.length)];
    let random_number= Math.floor(Math.random() * 8) +1 ; 
    let random_postion = random_number+randomLetter;
    return random_postion;
}
let random_postion = get_random_postion();
chessBoard.addEventListener('click' , (event) => {
        let row = event.target.parentElement.getAttribute("class").split(' ')[2]; 
        let column = event.target.getAttribute("class").split(' ')[0];
        var postion = row+column;
    if(game_started){
        if(postion === random_postion){
            score++;
            score_number.innerHTML=score;
            event.target.classList.add('selected_right');
            setTimeout(() => {
                event.target.classList.remove('selected_right');
            }, 500);
        }else{
            event.target.classList.add('selected_wrong');
            setTimeout(() => {
                event.target.classList.remove('selected_wrong');
            }, 500);
        }
        counter++;
        random_postion = get_random_postion();
        wanted_postion.textContent=random_postion;
        pos_appear.textContent=random_postion;
        setTimeout(() => {
            pos_appear.textContent='';
        }, 1000);
        
    }
});


timer_button.addEventListener('click',() => {
    random_postion = get_random_postion();
    wanted_postion.textContent=random_postion;
    pos_appear.textContent=random_postion;
        setTimeout(() => {
            pos_appear.textContent='';
        }, 1000);
    score =0;
    counter=0;
    game_started=true;
    var timeLeft = 30;
    score_number.innerHTML=score;
    countdown();
    var timerId = setInterval(countdown, 1000);
    timer_button.classList.add('none');
    instructions.classList.add('none');
    wanted_postion.classList.remove('none');
    timer_clock.classList.remove('none');
   
    
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            game_time_finshed();
        } else {
            timer_clock.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
});
let game_time_finshed = () => {
    game_started=false;
    score_number.innerHTML='Final score is : ' + score + ' Out of ' + counter;
    wanted_postion.classList.add('none');
    timer_clock.classList.add('none');
    timer_button.classList.remove('none');
    instructions.classList.remove('none');
}
    

