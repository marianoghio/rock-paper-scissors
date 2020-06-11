    
var puntosHumano = 0
var puntosRobot = 0

var eleccion = 12
function score(){
    if (puntosHumano > 2) {
       
            alert("HUMAN IS THE CHAMPION");
      
    } else if(puntosRobot > 2 ) {
        
        alert("COMPUTER IS THE CHAMPION");
   
    } 
}


const startGame = () => {
    
    const instroScreen = document.getElementsByClassName('intro')[0];
    const playButton = document.getElementsByClassName('start')[0];
    const gameboard = document.getElementsByClassName('game')[0];

    function Fade(){
        instroScreen.classList.add('fade-out');
        gameboard.classList.add('fade-in');
     }

     
        
     

   playButton.addEventListener("click", Fade);
       
};

startGame();  


const removechoose = document.getElementsByClassName('option')[0];




        document.getElementById('rock').addEventListener('click', function() {
eleccion = this.id;
removechoose.classList.add('fade-out');
setTimeout(() => {
document.getElementById('humanhand').src = `./assets/rock.png`;
}, 2000);
// document.getElementById("humano").innerHTML =("Humans choose: "+eleccion)

game();



});


document.getElementById('paper').addEventListener('click', function() {
eleccion = this.id;
removechoose.classList.add('fade-out');
setTimeout(() => {
document.getElementById('humanhand').src = "./assets/paper.png";
}, 2000);
// document.getElementById("humano").innerHTML =("Humans choose: "+eleccion);
game();



});



document.getElementById('scissor').addEventListener('click', function() {
eleccion = this.id;
removechoose.classList.add('fade-out');
setTimeout(() => {
document.getElementById('humanhand').src = `./assets/scissor.png`;
}, 2000);
// document.getElementById("humano").innerHTML =("Humans choose: "+eleccion)
game();



});






    function game() {
       
        score();
        hands.addEventListener('animationend', function(){
            this.style.animation = '';
         })
    
         setTimeout(() => {


        function computerPlay() {
            var things = ['rock', 'paper', 'scissor'];
            var thing = things[Math.floor(Math.random() * things.length)];
            
            // document.getElementById("robot").innerHTML =('The computer choose: ' + thing);
            return thing;
        }

        
        
        var playerSelection = eleccion

        const computerSelection = computerPlay()


        function playRound(playerSelection, computerSelection) {
            if (playerSelection===computerSelection){
                document.getElementById("ganador").innerHTML =("It's a Tie");

            } else if (playerSelection === "rock" && computerSelection === "paper") {
                document.getElementById("ganador").innerHTML =("computer wins");
                puntosRobot++;
            } else if (playerSelection === "rock" && computerSelection === "scissor") {
                document.getElementById("ganador").innerHTML =("human wins");
                puntosHumano++;
            } else if (playerSelection === "paper" && computerSelection === "scissor") {
                document.getElementById("ganador").innerHTML =("computer wins");
                puntosRobot++;
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                document.getElementById("ganador").innerHTML =("human wins");
                puntosHumano++;
            } else if (playerSelection === "scissor" && computerSelection === "paper") {
                document.getElementById("ganador").innerHTML =("human wins");
                puntosHumano++;
            } else if (playerSelection === "scissor" && computerSelection === "rock") {
                document.getElementById("ganador").innerHTML =("computer wins");
                puntosRobot++;
            } 
                
        }

       
   

        playRound(playerSelection, computerSelection);

  
        
        document.getElementById('computerhand').src = `./assets/${computerSelection}.png`;
        tanteador()
    }, 2000);

        hands.style.animation = "shake 2s ease";
            
        
    
        
        
  

    }


  
    

   function tanteador(){

     document.getElementById("robotscore").innerHTML =(puntosRobot);
     document.getElementById("humanscore").innerHTML =(puntosHumano);
   }
   
   




