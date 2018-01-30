$("#contact-form").submit(function(event){
    // cancels the form submission
    event.preventDefault(); //prevents page from refreshing
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var firstName = $("#form_firstname").val();
	var lastName = $("#form_lastname").val();
    var email = $("#form_email").val();
	var subject = $("#form_subject").val();
    var message = $("#form_message").val();
 
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "firstName=" + firstName + "&lastName=" + lastName + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }else{
				formError();
				submitMSG(false, text);
			}
        }
    });
}

function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}

function formError(){
	console.log("error with sending form");
}

function submitMSG(valid, msg){
        var msgClasses;
    if(valid){
//        msgClasses = "h3 text-center tada animated text-success";
    } else {
//        msgClasses = "h3 text-center text-danger";
    }
//    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}