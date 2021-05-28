'use strict';

const result =document.getElementById('result');
let [userScore,computerScore] = [0,0];

//game rules in Jason
let gameRules={
  Rock:{
    Rock:'draw',
    Paper:'lose',
    Scissor:'win',
    Lizard:'win',
    Spock:'lose',
  },
  Paper:{
    Rock:'win',
    Paper:'draw',
    Scissor:'lose',
    Lizard:'lose',
    Spock:'win',
  },
  Scissor:{
    Rock:'lose',
    Paper:'win',
    Scissor:'draw',
    Lizard:'win',
    Spock:'lose',
  },
  Lizard:{
    Rock:'lose',
    Paper:'win',
    Scissor:'lose',
    Lizard:'draw',
    Spock:'win',
  },
  Spock:{
    Rock:'win',
    Paper:'lose',
    Scissor:'win',
    Lizard:'lose',
    Spock:'draw',
  }
};
//user clicks 
const clicked = function(input){
 
  
  //choice of computer
  const choices =['Rock','Paper','Scissor','Lizard','Spock']
  let randomNum= Math.trunc(Math.random()*5);
  let computerPicks =choices[randomNum];

  //shows Choose messages
  document.getElementById('user-choice').innerHTML=`You Choose <span>${input.toUpperCase()}</span>`;
  document.getElementById('computer-choice').innerHTML=`Computer Choose <span> ${computerPicks.toUpperCase()}</span>`;

  //compare computer choice with user choice
  switch (gameRules[input][computerPicks]){
    case 'win':
      result.innerText ='You Win';
      result.style='background-color:#74f2ce';
      userScore++;
      
      break;
    case 'lose':
      result.innerText ='You Lose';
      result.style='background-color:#f53844';
      computerScore++;
     
      break;
    case 'draw':
      result.innerText ='DRAW';
      result.style='background-color:#f1dfd1';
     
      break;
  }
  //update score
  document.getElementById('user-score').innerText=userScore;
  document.getElementById('computer-score').innerText=computerScore;


};
