let myName = prompt("Who goes there?");
    document.write("Nice to meet you, " + myName);
    
function getName(){
    let answer = prompt("Which furry creature is best?");
    document.write(answer);
} 

let yourname = prompt("Teacher or Student?");

          if (yourname === "Teacher") {
            console.log("Hey Cassie! Please give me an A+!!");
            document.write("Hey Cassie, please give me an A+!");
          } else {
            console.log("Nice dude!");
          }
function rateMypage(){
  let starRate = prompt("Rate my page 1-5 Bears!");
  for (let i = 1; i<= starRate; i++){
    document.write("<img class='bearo' src='bear.jpg'/>");
  }
}

function bearquestion(){
  answer = prompt("What is the best Bear? Black or Brown?");
  if (answer == Brown) {
    console.log("You are correct!");
  } else {
    console.log("Wroooong!")
  }
}