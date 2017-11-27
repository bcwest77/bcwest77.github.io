$(document).ready(function(){

    // -----BOARD PAGE ---------
    var activeModal = null;
    $(".board a").keypress(function(e){
        if (e.which == 13) {
            $(this).click();
            activeModal = $(this).attr("data-target");

            console.log(activeModal + ".modal-footer button");
            $(activeModal + ".modal-footer button").get(0).focus();
            $(activeModal + ".modal-footer button").get(0).keypress(function(e){
                if (e.which !== 13) {
                    e.preventDefault();
                    console.log(1);
                }
            });

            console.log(activeModal);
        }
    });

    //--------------------------

});