var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // Declare variables
elForm          = document.getElementById('formSignup');          // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  if (pack == 'annual') {                              // If monthly package
    elPackageHint.innerHTML = 'Save $10 if you pay for 2 years!';//Show this msg
  } else if (pack == 'monthly') {
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year'; 
  } else if (pack == 'weekly') {
    elPackageHint.innerHTML = 'Save $96 if you pay monthly';
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'Wise choice!';            // Show this message
  }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);