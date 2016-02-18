/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

$(document).on('ready', function() {

  $('#order-form').validate({

    submitHandler: function(form) {
      form.submit();
    },

    rules: {

      "your-name": {
        required: true,
        minlength: 2,
        maxlength: 128
      }

    }

  });

});

  // adds required attribute inputs
  // $('div[class="form-group required"]').each(function(i) {
  //   $(this).find('input').rules('add','required');
  // });

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
