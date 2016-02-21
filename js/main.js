/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

$(document).on('ready', function() {

  //method to test if field contains numbers
  jQuery.validator.addMethod("hasNumbers", function(value, element) {
    var regexp = /[0-9]/;
    if (regexp.test(value)) {
      return false
    }

    else {
      return true
    }

  }, "Your name cannot contain numbers.");

  //method to test if value is valid US state code
  jQuery.validator.addMethod("validState", function(value,element) {
    var regexp = /^(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[ANU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/i;
    if (value.match(regexp)) {return true};
    return false;
  }, "Please enter a valid US state code.");

  $('#order-form').validate({

    submitHandler: function(form) {
      form.submit();
    },

    rules: {

      "your-name": {
        hasNumbers: true,
        minlength: 2,
        maxlength: 128
      },

      "your-state": {
        validState: true
      },

      "your-zip": {
        digits: true,
        minlength: 5,
        maxlength: 5
      },

      "card-holder-name": {
        hasNumbers: true,
        minlength: 2,
        maxlength: 128
      },

      "card-number": {
        creditcard: true,
      },

      "expiry-month": {
        required: true
      },

      "expiry-year": {
        required: true
      },

      "shipping-method": {
        required: true
      },

      "cvv": {
        maxlength: 3,
        minlength: 3,
        digits: true,
        required: true
      },

      "comments": {
        maxlength: 500
      }
    },

    messages: {
      "card-holder-name": {
        hasNumbers: "Card holder name cannot contain numbers."
      }

    }


  });

  // adds required attribute inputs
  $('div[class="form-group required"]').each(function(i) {
    $(this).find('input').rules('add','required');
  });

});
