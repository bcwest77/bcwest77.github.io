$(document).ready(function(){

    // -----BOARD PAGE ---------

    var activeModal = null;
    $(".board a").keydown(function(e){
        if (e.which == 13) {
            $(this).click();
            activeModal = $(this).attr("data-target");

            setTimeout(function (){
                $("#test").focus();
            }, 1);
    
            $(activeModal + " .modal-footer button").keydown(function(e){
                console.log(1);
                if (e.which !== 13) {
                    e.preventDefault();
                }
            });

            console.log(activeModal);
        }
    });

    //--------------------------

});