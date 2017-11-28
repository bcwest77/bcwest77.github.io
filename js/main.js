$(document).ready(function(){

    // -----BOARD PAGE --------

    var activeModal = null;
    // When a user presses a key on a board member
    $(".board a, #committees .col-md-4 a").keydown(function(e){
        // Check if it's the Return key
        if (e.which == 13) {
            // If so, click the button
            $(this).click();
            // Get the modal id from the button clicked
            activeModal = $(this).attr("data-target");
            
            // Set focus to the top button in the modal. A timeout 
            // is required due to the modal's entrance animation
            setTimeout(function () {
                $(activeModal + " .modal-header button").focus();
            }, 150);

            // When a user presses a key on the modal's bottom close button
            $(activeModal + " .modal-footer button").keydown(function(e){
                if (e.which == 9 && !e.shiftKey) {
                    e.preventDefault();
                    $(activeModal + " .modal-header button").focus();
                }
            });
            $(activeModal + " .modal-header button").keydown(function(e){
                if (e.which == 9 && e.shiftKey) {
                    e.preventDefault();
                    $(activeModal + " .modal-footer button").focus();
                }
            });
        }
    });
    //--------------------------

});