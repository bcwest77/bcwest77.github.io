$(document).ready(function(){

    // -----BOARD PAGE ---------

    $(".board a:focus").keypress(function(e){
        if (e.which == 13) {
            console.log("yo yo");
            $(this).click();
        }
    });

    //--------------------------

});