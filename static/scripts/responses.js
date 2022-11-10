var favoritefood = "";
var live ="";
function getBotResponse(input){
  



    if (input == "Marry" || input == "Kiana" || input == "Leslie" || input == "Carry") {
        return `"Morning ${input}, I know a few female friends named ${input} who are very friendly, easy-going and easy to get along with, aren't you? :) "`;
    } else if (input == "Yes" || input == "Somthing" ) {
        return "Haha, I guess you like desserts, right?";
    } else if (input == "Yes I like desserts") {
        //第二層
          if(input == "Yes, I like desserts" || input == "Yes I am"){
           let favoritefood =  "desserts";
           
            return "oic, I love desserts too! I live in Kwun Tong ,and you??"; 

          }
    } else if (input == "No i am not" || input == "No I don't like desserts" ) {
          
         if(input == ""){
            return "Oic ,What is your favorite food";
            let favoritefood =  input;
         }
       
               //bugs
          
    }  else if (input == "I live in Kwun Tong Too" ) {
         let live = "Kwun Tong";
         console.log(live);

        return `"I will pass by ${live} after work on Thursdays and Fridays. I know there is a ${favoritefood} dessert shop. When are you free ?Thursdays Or Fridays?"`;
    }  else if (input == "Thursdays" ) {
        return "Great, see you on Thursdays night";
    } else if (input == "Fridays" ) {
        return "Great, see you on Fridays night";
    }else {
        return "Try asking something else!";
    }



    if (input == "rock") {  
   return "paper";
   } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
       return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}

function inputfavoritefood(input){
   let favoritefood = input ;
   console.log(favoritefood);
}