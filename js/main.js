$(document).ready(function(){

    // -----BOARD PAGE ---------
    var activeModal = null;
    $(".board a").keypress(function(e){
        if (e.which == 13) {
            $(this).click();
            activeModal = $(this).attr("data-target");

            $(activeModal + " .modal-footer button").focus();
            $(activeModal + " .modal-footer button").keypress(function(e){
                if (e.which !== 13) {
                    e.preventDefault();
                    $(activeModal + " .modal-footer button").focus();
                }
            });

            console.log(activeModal);
        }
    });

    $("")

    //--------------------------

});