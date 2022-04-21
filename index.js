let userName = window.prompt ("Please enter your Name")
let userScore = 0
for(let i=0; i<questions.length; i++){
    let userAnswer = window.prompt(questions[i].text)
    if (userAnswer === questions[i].correctAnswer)   
     {
         userScore= userScore + 10
     }
}
window.alert("Your Score is : "+ userScore)