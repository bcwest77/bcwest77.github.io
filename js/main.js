$(document).ready(function(){

    // -----BOARD PAGE ---------
    var activeModal = null;
    $(".board a").keypress(function(e){
        if (e.which == 13) {
            activeModal = $(this).attr("data-target");

            $(activeModal + " button").focus();
            $(activeModal + " button").keypress(function(e){
                if (e.which !== 13) {
                    e.preventDefault();
                }
            });

            console.log(activeModal);
            $(this).click();
        }
    });

    $("")

    //--------------------------

});