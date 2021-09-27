// This game consists of 15 questions regarding me(Himanshu)


var readlineSync = require('readline-sync');
var userName = readlineSync.question("Enter your Name: ");
var score = 0;

 console.log("Hello "+userName+", Welcome to the Do you know Himanshu Game!");
var userDecision = readlineSync.question("Are you excited to play? ");

if(userDecision==='yes' || userDecision==='Yes' || userDecision==='YES')
{
        console.log("\n Instructions: \n1. There will be 3 levels and each level consists of 5 questions.\n2. One point will be awarded for each right answer and one point will be deducted for every wrong answer.\n3. To reach level two minimum 3 points are required\n4. To reach level three minimum 5 points are required\nLets start the game!\n\nREWARD: The person who gets the highest score will get a personal website completely designed and built by me for FREEEEEE!")


      function play(question, answer)
      {
          var userAns = readlineSync.question(question);
      // if else conditional statements
            if(userAns === answer)
            {
              console.log("Congratulations! You are right");
              score++;
              console.log("Your score: ",score);
              console.log("------------------------------");
            }
            else
            {
              console.log("You are wrong");
              score--;
              console.log("Your score: ",score);
              console.log("------------------------------");

            }

      }
        
      var questionOne = {
        question : "What is my full name? ",
        answer: "Himanshu Kesarwani"
      }
      var questionTwo = {
        question : "Which is my favourite comedy film? ",
        answer: "Dhamaal"
      }
      var questionThree = {
        question : "What is my favourite food? ",
        answer: "Dosa"
      }
      var questionFour = {
        question : "Which online game I like to play? ",
        answer: "BGMI"
      }
      var questionFive = {
        question : "Which is my current favourite book? ",
        answer: "Life is what you make it"
      }

      // array of all level 1 questions
      var questionList = [ questionOne, questionTwo, questionThree, questionFour, questionFive]


      //loop
      for(i=0;i<questionList.length;i++)
      {
        console.log("\n\nQuestion No. "+(i+1))
        play(questionList[i].question,questionList[i].answer);
      }
      //LEVEL 2
      if(score>=3)
      {
        console.log("\n\nWelcome to Level 2!")

        function play(question, answer)
          {
              var userAns = readlineSync.question(question);
          // if else conditional statements
                if(userAns === answer)
                {
                  console.log("Congratulations! You are right");
                  score++;
                  
                }
                else
                {
                  console.log("You are wrong");
                  score--;
                }
            console.log("Your score: ",score);
            console.log("----------------------------");
          }
          //level 2 questions objects 
          var questionOne = {
            question : "What is the name of my School? ",
            answer: "ECPSSS"
          }
          var questionTwo = {
            question : "What is my age? ",
            answer: "22"
          }
          var questionThree = {
            question : "In which company I did my second Internship? ",
            answer: "Zolo"
          }
          var questionFour = {
            question : "Who is my oldest best friend? ",
            answer: "Kushagra"
          }
          var questionFive = {
            question : "Who is my favourite Hip-Hop artist? ",
            answer: "Karma"
          }

          // array of all level 2 questions
          var questionList = [ questionOne, questionTwo, questionThree, questionFour, questionFive]


          //loop
          for(i=0;i<questionList.length;i++)
          {
            console.log("\n\nQuestion No. "+(i+1))
            play(questionList[i].question,questionList[i].answer);
          }
         console.log("Your final Score: ", score)
          
         // Level 3
          if(score>=5)
          { 
            console.log("\n\nWelcome to level 3")
          
          function play(question, answer)
          {
            var userAns = readlineSync.question(question);
          // if else conditional statements
                if(userAns === answer)
                {
                  console.log("Congratulations! You are right");
                  score++;
                  
                }
                else
                {
                  console.log("You are wrong");
                  score--;
                }
                console.log("Your score: ",score);
                console.log("------------------------------");

          }
          //  level 3 questions objects
          var questionOne = {
            question : "A Neighbouring Country where I want to visit: ",
            answer: "Bhutan"
          }
          var questionTwo = {
            question : " what was the name of the brand of my first phone? ",
            answer: "Nokia"
          }
          var questionThree = {
            question : "My viral Quora answer has how many upvotes? ",
            answer: "6k"
          }
          var questionFour = {
            question : "What is my favourite hobby? ",
            answer: "Listening Music"
          }
          var questionFive = {
            question : "In which year I learnt how to drive a car? ",
            answer: "2017"
          }

          // array of all level 3 questions
          var questionList = [ questionOne, questionTwo, questionThree, questionFour, questionFive]


          //loop
          for(i=0;i<questionList.length;i++)
          {
            console.log("\n\nQuestion No. "+(i+1))
            play(questionList[i].question,questionList[i].answer);
          }
         
          console.log("Congratulations On completing the last level!\nYour final score: "+score)
          
          
        }
        else
        {
          console.log("Sorry! Your score is less than 6 so you cannot go to next level")
        }

        
        }            
        else
        {
        console.log("Sorry! You cannot go to the next level as your Score is less than 3")
        }

        

}
else
{
  console.log("Sorry! You missed the fun.")
}


//  highScores Data
var personOne = {
  name: 'Himanshu',
  score: '1'
}
var personTwo = {
  name: 'Kushagra',
  score: '1'
}
// array of high highScores
highScores = [personOne,personTwo]


console.log("\n\nHere are some High Scorers: ")
for(let i =0;i<highScores.length;i++)
{
  console.log(highScores[i].name +" : "+ highScores[i].score)
  
}

if((score>personOne.score) || (score>personTwo.score))
{
  console.log("\nYou broke the High Scorers record!\nSend me your High Score along with Screenshot, I will update it!")
}

//The end :)