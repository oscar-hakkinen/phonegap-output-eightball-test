
$(document).on("pagecreate", "#pageone", function() {
  $('#submitButton').on("click", function() {
    submitText();
  });            
});            

function submitText() {
	
    var answer = !Math.round(Math.random())
    
    $("#answer").text(answer);

    
  
    if (answer == true){
           console.log("true");
        navigator.notification.beep(1);
        navigator.vibrate(2000);
     
    } else {
         console.log("false");
    navigator.notification.beep(2);
    };
};