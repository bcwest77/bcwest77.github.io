$(document).ready(function(){

    // -----BOARD PAGE ---------

    

    $(".modal-footer button").keypress(function(e){
        if (e.which !== 13) {
            e.preventDefault();
            console.log(1);
        }
    });

    var activeModal = null;
    $(".board a").keypress(function(e){
        if (e.which == 13) {
            $(this).click();
            activeModal = $(this).attr("data-target");

            console.log(activeModal);
        }
    });

    //--------------------------

});