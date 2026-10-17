let scores={

    home:0,
    guest:0

};

const buttons=document.querySelectorAll('.score-btn');

buttons.forEach(button =>{
button.addEventListener('click',function(){
    const team= this.getAttribute('data-team');
    const points=parseInt(this.getAttribute('data-points'));
    scores[team]+=points;
    document.getElementById(`score-${team}`).textContent=scores[team];


});



});