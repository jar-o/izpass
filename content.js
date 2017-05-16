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
    // NOTE Found in some cases the value change on the password wouldn't
    // be retained unless it was set at this point, as opposed to the
    // 'focusin' event above.
    e.value='wutwut';

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
        e.target.style.backgroundColor = '#FF69B4';

        // Return focus to the element originally selected by the page
        if (originalFocusElement) originalFocusElement.focus();
    }
}
