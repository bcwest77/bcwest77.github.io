$("#enforcement-form").validate({
    //specify the validation rules
    rules: {
        first: "required",
        last: "required",
        email: {
            required: true,
            email: true //email is required AND must be in the form of a valid email address
        },
        phone: {
            required: true,
            minlength: 7
        },
        address: "required",
        description: "required"
    },
     
    //specify validation error messages
    messages: {
        first: "Please enter your first name!",
        last: "Please enter your last name!",
        email: "Please enter a valid email address!",
        phone: {
            required: "Please enter a valid phone number!",
            minlength: "Please enter a valid 7-digit phone number!"
        },
        address: "Please enter your address!",
        description: "Please enter a description!"
    },
     
    submitHandler: function(form) {
        form.submit();
    }
     
});

$("#validate-form").validate({
    //specify the validation rules
    rules: {
        first: "required",
        last: "required",
        email: {
            required: true,
            email: true //email is required AND must be in the form of a valid email address
        },
        phone: {
            required: true,
            minlength: 7
        },
        address: "required",
        description: "required"
    },
     
    //specify validation error messages
    messages: {
        first: "Please enter your first name!",
        last: "Please enter your last name!",
        email: "Please enter a valid email address!",
        phone: {
            required: "Please enter a valid phone number!",
            minlength: "Please enter a valid 7-digit phone number!"
        },
        address: "Please enter your address!",
        description: "Please enter a description!"
    },
     
    submitHandler: function(form) {
        form.submit();
    }
     
});