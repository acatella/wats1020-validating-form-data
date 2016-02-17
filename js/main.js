/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

$(document).ready(function() {

  $('#order-form').validate({
    rules: {
      "your-name": {
        minlength: 2,
        maxlenght: 128,
        // hasNumbers: "hasNumbers"
      }
    },

    messages: {
      "your-name": {
        minlength: "Your name must be at least 2 characters.",
        maxlength: "Your name cannot be longer that 128 characters."
      }

    }

  });

  //adds required attribute inputs
  $('div[class="form-group required"]').each(function(i) {
    $(this).find('input').rules('add','required');
  });

  //method to test if name contains numbers
  // jQuery.validator.addMethod("hasNumbers", function(value, element) {
  //   var regexp = /[0-9]/;
  //   if (regexp.test(value)) {
  //     return false
  //   }
  //
  //   else {
  //     return true
  //   }
  //
  // }, "Your name cannot contain numbers.");



});
