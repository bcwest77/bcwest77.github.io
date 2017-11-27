$(document).ready(function(){

    // -----BOARD PAGE ---------

    

    $("#test").keypress(function(e){
        console.log(1);
        if (e.which !== 13) {
            e.preventDefault();
        }
    });

    var activeModal = null;
    $(".board a").keypress(function(e){
        if (e.which == 13) {
            $(this).click();
            activeModal = $(this).attr("data-target");
            $("#test").keypress(function(e){
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