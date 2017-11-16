
$(document).on("pagecreate", "#pageone", function() {
  $('#submitButton').on("click", function() {
    submitText();
  });            
});            

function submitText() {
	
    var words = [
    "zero secret",    
    "one good",
    "two good",
    "three good",
    "four good",
    "five neutral",
    "six bad",
    "seven bad",
    "eight bad",
    "nine bad",
    "ten bad"    
    ];
    
    var answer = Math.floor(Math.random()* 10)
    
    $("#answer").text(answer);

    $("#fortune").text(randomAnswer);
  

    function randomAnswer() {
        var result = words[answer()] + " " + words[answer() + 10];
  return result;
    
    };
    
    
    
    
    
    
    if (answer == true){
           console.log("true");
        navigator.notification.beep(1);
        navigator.vibrate(2000);
     
    } else {
         console.log("false");
    navigator.notification.beep(2);
    };
};