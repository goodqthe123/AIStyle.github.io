
function getBotResponse(input){
  
    var favoritefood = "";
    var live ="";
    var name ="";


    if (input.includes('name')) {
        let name =  input.substr(10);  //My name is 
        console.log(name);
        return `"Morning ${name}, I know a few friends named ${name} who are very friendly, easy-going and easy to get along with, aren't you? :) "`;

    } else if (input == "Yes" || input == "Somtime" ) {
        return "Haha, I guess you like desserts, right?";
    } else if (input == "Yes I like desserts" || input == "Yes I am" || input == "Yes, I like desserts") {
        //第二層
          if(input == "Yes I like desserts" || input == "Yes I am" || input == "Yes, I like desserts"){
           let favoritefood =  "desserts";
           
            return "oic, I love desserts too! I live in Kwun Tong ,and you??"; 

          }
    } else if (input == "No" || input == "No I don't like desserts" ) {
          
         if(input == "No" || input == "No I don't like desserts" ){
            return "Oic ,What is your favorite food";
           
         }
       
               //bugs
          
    }  else if (input.includes('favorite food') ) {       //input == "My favorite food is"
         let favoritefood =  input.substr(19);   // I live in 
         console.log(favoritefood);

        return `"OMG ,I love ${favoritefood} too ,I think this is the most delicious food in the world!!! I live in Kwun Tong ,and you??"`;
    }  else if (input.includes('live') ) {       //input == "I live in Kwun Tong Too"
        let live =  input.substr(10);   // I live in 
        console.log(live);

       return `"I will pass by ${live} after work on Thursdays and Fridays. I know there is a ${favoritefood} dessert shop. When are you free ?Thursdays Or Fridays?"`;
   } else if (input == "Thursday" ) {
        return "Great, see you on Thursdays night";
    } else if (input == "Friday" ) {
        return "Great, see you on Fridays night";
    }     else if (input == "rock") {  
        return "paper";
        } else if (input == "paper") {
             return "scissors";
         } else if (input == "scissors") {
            return "rock";
         } if (input == "hello") {
            return "Hello there!";
        } else if (input == "goodbye") {
            return "Talk to you later!";
        }
    
    
    
    else {
        return "Try asking something else!";
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