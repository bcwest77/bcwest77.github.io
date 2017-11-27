$(document).ready(function(){

    // -----BOARD PAGE --------

    var activeModal = null;
    $(".board a, #committees.col-md-4 a").keydown(function(e){
        if (e.which == 13) {
            $(this).click();
            activeModal = $(this).attr("data-target");
            

            setTimeout(function () {
                $(activeModal + " .modal-footer button").focus();
            }, 150);

            $(activeModal + " .modal-footer button").keydown(function(e){
                if (e.which == 9) {
                    e.preventDefault();
                }
            });
        }
    });
    //--------------------------

});