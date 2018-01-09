(function() {
    // Add event listener for open form button

    var openFormbutton = document.querySelector('.arrow-down');

    if(openFormbutton) {
        openFormbutton.addEventListener('click', function(e) {
            e.preventDefault();
            form.open();
        })
    }

}());