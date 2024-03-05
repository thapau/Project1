var num, rnum, sum;
var humanScore=0, computerScore=0;
var repeat = false;

startGame();
function startGame(){
    do{
        repeat =false;
     num=prompt("Enter number between 1 to 9");  
     if(num ==="" ){
         repeat = true;
     }
     else if(isNaN(num)){
         repeat = true;
     }  
}while(num<1 || num>9 || repeat ===true );   

rnum = (Math.floor(Math.random()*10));
alert("Random number is : " + rnum);

sum = num+rnum;
if(num==rnum){
   alert("It is draw!!")
}else if(sum%2==0)
{
    alert("Your are the winner!!")
    humanScore +=1;
}else{
    alert("Computer is winner!!")
    computerScore +=1;
}
Confirmation();
}
function Confirmation()
{
var returnValue = confirm("Do you want to continue?");
if( returnValue == true )
{
alert("User wants to continue!");
startGame();
}
else
{
    var result = "You Score: " + humanScore + "\n" +"Computer Score: " +computerScore;
    if(humanScore > computerScore){
        result += "\nYou are winner!";
    }else if(computerScore > humanScore){
        result += "\nComputer is winner!";
    }else{
        result += "\nGame Draw!";
    }
alert(result);
}
} 