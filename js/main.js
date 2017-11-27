$(document).ready(function(){

    // -----BOARD PAGE ---------
    var activeModal = null;
    $(".board a").keypress(function(e){
        if (e.which == 13) {
            if (activeModal !== null)
                $(activeModal).modal("hide");

            activeModal = $(this).attr("data-target");
            console.log(activeModal);
            $(this).click();
        }
    });

    //--------------------------

});