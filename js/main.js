$(document).ready(function(){

    // ----- MODAL TAB FIX -------
    
    $(".board a, #committees-page .col-md-4 a, #archives-page .archive-months a, #previous-page").click(function() {
        // Get the modal id from the button clicked
        activeModal = $(this).attr("data-target");
        
        // Set focus to the top button in the modal. A timeout 
        // is required due to the modal's entrance animation
        setTimeout(function () {
            $(activeModal + " .modal-header button").focus();
        }, 150);

        // When a user presses a key on the modal's bottom close button
        $(activeModal + " .modal-footer button").keydown(function(e){
            // If the pressed key is only tab, and not tab+shift
            if (e.which == 9 && !e.shiftKey) {
                // Prevent normal tab behavior
                e.preventDefault();
                // Set focus to the modal's top close button
                $(activeModal + " .modal-header button").focus();
            }
        });
        // When a user presses a key on the modal's top close button
        $(activeModal + " .modal-header button").keydown(function(e){
            // If the pressed key is tab+shift, not just tab
            if (e.which == 9 && e.shiftKey) {
                // Prevent normal tab behavior
                e.preventDefault();
                // Set focus to the modal's bottom close button
                $(activeModal + " .modal-footer button").focus();
            }
        });
    });

    var activeModal = null;
    // When a user presses a key on a button containing a modal
    $(".board a, #committees-page .col-md-4 a, #archives-page .archive-months a, #previous-page").keydown(function(e){
        // Check if it's the Return key
        if (e.which == 13) {
            // If so, click the button like normal
            $(this).click();
        }
    });
    //--------------------------

});
