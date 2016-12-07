var main = function () {
    $(".choice").toggle();
    
    $("#btn1a").click(function(){
        $("#choice1a").toggle(); 
    });
    
    $("#btn1b").click(function(){
        $("#choice1b").toggle();
    });

};

$(document).ready(main);