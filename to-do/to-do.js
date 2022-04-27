let button = document.querySelector('.button');

button.addEventListener('click', function() {

    //versi kalem
    // let input = document.querySelector('.input').value;
    // $('.result').append('<div class="d-flex card"><div class="card-body">' + input +
    //     '</div><div><button class="btn btn-danger">Delete</button><button class="btn btn-warning">Edit</button></div></div>');

    //versi jQuery
    $('.result').append('<div class="d-flex card"><div class="card-body">' + $('.input').val() +
        '</div><div><button class="btn btn-danger delete">Delete</button><button class="btn btn-warning edit">Edit</button></div></div>');

    //mengosongkan input form
    $('.input').val('');

});

$('.delete').click(function() {
    $('.card-body').empty();
});