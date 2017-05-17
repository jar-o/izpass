var originalFocusElement = document.activeElement;

document.addEventListener('focusin', function (e) {
    passwordFocusHandler(e);
});

// Get all input fields
var allinputs = document.querySelectorAll('input');

// Iterate over all input fields checking for passwords
for (var i = 0; i < allinputs.length; i++) {
    if (allinputs[i].type === 'password' && passwordPickHandler(allinputs[i])) break;
}

// Selects the appropriate password field and triggers the focus() event on it
function passwordPickHandler(e) {
    passwordHandler(e);

    // Trigger focus, which seems to be necessary in several key cases in
    // order for styles to get computed, and not be ignored.
    e.focus();

    // Probably want to do some further validations to ensure you're picking
    // the right password element
    return true;
}

// Fires on programmatic "focus" of password field. SHOULD return focus to the
// originally focused element, if any.
function passwordFocusHandler(e) {
    if (e.target.type && e.target.type === 'password') {
        passwordHandler(e.target);
        // Return focus to the element originally selected by the page
        if (originalFocusElement) originalFocusElement.focus();
    }
}


function passwordHandler(e) {
    e.value='wutwut';
    e.style.backgroundColor = '#FF69B4';
}
