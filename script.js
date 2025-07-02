//your code here
// Form validation
      (function () {
        "use strict";

        // Fetch the form element
        const form = document.getElementById("internshipForm");

        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );

        // Add input event listeners for real-time validation
        const inputs = form.querySelectorAll("input, select");
        inputs.forEach((input) => {
          input.addEventListener("input", function () {
            if (input.checkValidity()) {
              input.classList.remove("is-invalid");
              input.classList.add("is-valid");
            } else {
              input.classList.remove("is-valid");
              input.classList.add("is-invalid");
            }
          });
        });
      })();