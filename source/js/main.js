(function() {

    // Add event listener for open form button

    var openFormbutton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');

    if(openFormbutton) {
        openFormbutton.addEventListener('click', function(e) {
            e.preventDefault();
            IT.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (IT.form.isValid()) {
                console.log('All good!');
            } else {
                console.log('Is not valid!')
            }
        })
    }

}());