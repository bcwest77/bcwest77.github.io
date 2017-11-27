$(document).ready(function(){

    // -----BOARD PAGE ---------
    var activeModal = null;
    $(".board a").keypress(function(e){
        if (e.which == 13) {
            activeModal = $(this).attr("data-target");

            $(activeModal).keypress(function(e){
                if (e.which !== 13) {
                    e.preventDefault();
                }
                else
                    $(activeModal).modal("hide");
            });

            console.log(activeModal);
            $(this).click();
        }
    });

    $("")

    //--------------------------

});