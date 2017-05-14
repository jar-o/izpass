var timer;

// The most annoying effect ever
function toggleColors(el, colors, intervalms){
    clearTimeout(timer);
    var counter = 0
    var change = function(){
        el.style.backgroundColor = colors[ counter%colors.length ];
        counter++;
        if ( colors.length > 1 )
            timer = setTimeout(change, intervalms);
    };

    change();
}

document.addEventListener('focusin', function (e) {
    if (e.target.type && e.target.type === 'password') {
        toggleColors(e.target, ['#E12C2C','white'], 100); // Seizure!

        // So, what you really want to do at this point is some further
        // verification (check site, correct input ID, etc), then you could do
        // something like autofill ...
    }
});
