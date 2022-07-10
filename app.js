let myName = prompt("Who goes there?");
    document.write("Nice to meet you, " + myName);
    
function getName(){
    let answer = prompt("Which furry creature is best?");
    document.write(answer);
}

getName(); 

let yourname = prompt("Teacher or Student?");

          if (yourname === "Teacher") {
            console.log("Hey Cassie! Please give me an A+!!");
            document.write("Hey Cassie, please give me an A+!");
          } else {
            console.log("Nice dude!");
          }